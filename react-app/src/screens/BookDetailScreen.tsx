import { Link, useParams } from "react-router-dom";
import { useBook } from "../domain/book/useBook";

export const BookDetailScreen = () => {
  const { isbn } = useParams<{ isbn: string }>();
  const { book, state } = useBook(isbn);

  if (state === "initial" || state === "loading" || !book)
    return <h2>Loading...</h2>;

  return (
    <div className="book-detail-screen">
      <img src={book.cover} alt={`Cover of ${book.title}`} />
      <h2>{book.title}</h2>
      <h3>{book.subtitle}</h3>
      <div className="text-meta">by {book.author}</div>
      <small>
        {book.isbn} | {book.numPages} pages
      </small>

      <h2 className="m-top m-bottom">{book.price}</h2>

      <p>{book.abstract}</p>

      <Link to={`/books/${book.isbn}/edit`} className="m-top">
        <button>
          <span>✏️</span> Edit Book
        </button>
      </Link>
      <Link to={`/books/${book.isbn}/editUncontrolled`} className="m-top">
        <button>
          <span>✏️</span> Edit Book (uncontrolled form)
        </button>
      </Link>
    </div>
  );
};
