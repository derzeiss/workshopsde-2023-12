import { useEffect, useState } from 'react';
import { Book, FetchState } from 'workshops-de_shared';
import { getBooks } from './api';

export const useBooks = () => {
  const [state, setState] = useState<FetchState>('initial');
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    setState('loading');
    getBooks()
      .then((apiBooks) => {
        setState('success');
        setBooks(apiBooks);
      })
      .catch((err) => {
        console.error('FETCH ERR:', err);
        setState('error');
      });
  }, []);

  return { books, state };
};
