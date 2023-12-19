import { useParams } from "react-router-dom";
import { getBook } from "../domain/book/api";
import { useEffect, useState } from "react";
import { Book } from "workshops-de_shared";

export const BookDetailScreen = () => {
  const { isbn } = useParams<{ isbn: string }>();
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    if (!isbn) return;
    getBook(isbn)
      .then(setBook)
      .catch((err) => {
        console.error("err", err);
      });
  }, [isbn]);

  if (!book) return <h2>Loading...</h2>;

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
    </div>
  );
};
