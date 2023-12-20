import { Book } from 'workshops-de_shared';
import { URL_API } from '../../config';

// ---- PRIVATE HELPERS ----

/**
 * Returns a fetch init param with JSON headers set.
 * @param init user-specific init. Will extend default settings.
 * @returns init object ready to be put into a fetch request.
 */
const getJsonInit = (init?: RequestInit): RequestInit | undefined => {
  if (!init) return undefined;
  return {
    ...init,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...init?.headers,
    },
  };
};

/**
 * Fetches JSON from an external API and returns the result as typed & parsed data.
 * @param url url to fetch from
 * @param init fetch -> init param
 * @returns typed & parsed data from API.
 */
const fetchJson = <T = void>(url: string, init?: RequestInit) => {
  return fetch(url, getJsonInit(init)).then((res) =>
    res.ok ? (res.json() as Promise<T>) : Promise.reject(res),
  );
};

// ---- API-CLIENT ----

/**
 * Fetches all books from the bookmonkey-API.
 * @returns Promise resolving to the complete list of books.
 */
export const getBooks = () => fetchJson<Book[]>(`${URL_API}/books`);

/**
 * Fetches a single book from the bookmonkey-API.
 * @returns Promise resolving to the fetched book.
 */
export const getBook = (id: string) => fetchJson<Book>(`${URL_API}/books/${id}`);

/**
 * Edits a book via the bookmonkey-API.
 * @returns Promise resolving to the edited book.
 */
export const editBook = (book: Book) =>
  fetchJson<Book>(`${URL_API}/books/${book.id}`, {
    method: 'put',
    body: JSON.stringify(book),
  });

/**
 * Patches a given book.
 * @param isbn book isbn.
 * @param book partial of book containing changed fields.
 * @returns updated book.
 */
export const patchBook = (isbn: string, book: Partial<Book>) => {
  return fetch(`http://localhost:4730/books/${isbn}`, {
    method: 'patch',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => (res.ok ? res.json() : Promise.reject(res))) as Promise<Book>;
};

/**
 * Posts a new book to the bookmonkey-API.
 * @returns Promise resolving to the added book.
 */
export const addBook = <Book>(book: Omit<Book, 'id' | 'isbn'>) =>
  fetchJson(`${URL_API}/books`, {
    method: 'post',
    body: JSON.stringify(book),
  });

/**
 * Removes a book from the bookmonkey-API.
 * @returns 204
 */

export const removeBook = (id: string) =>
  fetchJson(`${URL_API}/books/${id}`, {
    method: 'delete',
  });
