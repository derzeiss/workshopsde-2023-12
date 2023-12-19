import { FormEvent, useRef } from "react";
import { Link, useParams } from "react-router-dom";

export const BookEditScreen = () => {
  const { isbn } = useParams<{ isbn: string }>();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    console.log("val", inputRef.current?.value);
  };

  return (
    <div className="book-edit-screen">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" ref={inputRef} />
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
