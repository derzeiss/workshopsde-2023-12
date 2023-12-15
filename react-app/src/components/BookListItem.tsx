import React from "react";
import { Book } from "../domain/book/Book";

interface BookListItemProps {
  book: Book;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book }) => {
  return (
    <div className="book-list-item">
      <img src={book.cover} alt={`Cover of ${book.title}`} />
      <h2>{book.title}</h2>
      <h3>{book.subtitle}</h3>
      <div className="text-meta">by {book.author}</div>
    </div>
  );
};
