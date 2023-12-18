import React, { useContext, useState } from "react";
import { Book, cx } from "workshops-de_shared";
import { Hideable } from "./Hideable";
import { LikeCounter } from "./LikeCounter";
import { ThemeContext } from "../domain/theme/ThemeContext";

interface BookListItemProps {
  book: Book;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book }) => {
  const { primaryColor } = useContext(ThemeContext);
  const [likes, setLikes] = useState(0);
  const isFree = book.price === "$0.00";

  return (
    <div className={cx("book-list-item", { "book-list-item_free": isFree })}>
      <img src={book.cover} alt={`Cover of ${book.title}`} />
      <h2 style={{ color: primaryColor }}>
        {likes >= 5 && <span className="icon_entry">⭐️ </span>}
        {isFree && <span>💰 </span>}
        {book.title}
      </h2>
      <LikeCounter likes={likes} onLikesChange={setLikes} />
      <h3>{book.subtitle}</h3>
      {/* <CrazyButton>{book.author}</CrazyButton> */}
      <div className="text-meta">by {book.author}bitt</div>
      <Hideable>{book.abstract}</Hideable>
    </div>
  );
};
