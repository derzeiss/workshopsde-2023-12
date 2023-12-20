import { FormEvent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useBook } from "../domain/book/useBook";

export const BookEditScreen = () => {
  const { isbn } = useParams<{ isbn: string }>();
  const [title, setTitle] = useState("");
  const { book, state } = useBook(isbn);

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log("submit", title);
  };

  useEffect(() => {
    if (!book) return;
    setTitle(book.title);
  }, [book]);

  if (!book || state === "loading") return <h2>Loading...</h2>;

  return (
    <div className="book-edit-screen">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />

        {title}
        <button type="submit" className="m-top">
          <span>💾</span>Save
        </button>
      </form>
      <Link to={`/books/${isbn}`}>
        <button className="secondary m-top">Cancel</button>
      </Link>
    </div>
  );
};
