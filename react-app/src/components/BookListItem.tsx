import React from "react";
import { Book, cx } from "workshops-de_shared";

interface BookListItemProps {
  book: Book;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book }) => {
  const isFree = book.price === "$0.00";

  return (
    <div className={cx("book-list-item", { "book-list-item_free": isFree })}>
      <img src={book.cover} alt={`Cover of ${book.title}`} />
      <h2>
        {isFree && <span>💰</span>}
        {book.title}
      </h2>
      <h3>{book.subtitle}</h3>
      <div className="text-meta">by {book.author}</div>
    </div>
  );
};
