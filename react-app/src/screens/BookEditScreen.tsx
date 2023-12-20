import { ChangeEventHandler, FormEvent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Book } from "workshops-de_shared";
import { useBook } from "../domain/book/useBook";

export const BookEditScreen = () => {
  const { isbn } = useParams<{ isbn: string }>();
  const { book, state } = useBook(isbn);
  // using own variable here to prevent mutating book
  const [formValues, setFormValues] = useState<Book>({} as Book);

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log("submit", formValues?.title);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (ev) =>
    setFormValues({ ...formValues, [ev.target.name]: ev.target.value });

  useEffect(() => {
    if (!book) return;
    setFormValues({ ...book });
  }, [book]);

  if (state === "initial" || state === "loading" || !formValues.title)
    return <h2>Loading...</h2>;

  return (
    <div className="book-edit-screen">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          value={formValues.title}
          onChange={handleChange}
        />

        <label htmlFor="author">Author</label>
        <input
          id="author"
          type="text"
          name="author"
          value={formValues.author}
          onChange={handleChange}
        />

        <button type="submit" className="m-top">
          <span>💾</span>Save
        </button>

        <pre>{JSON.stringify(formValues, null, 2)}</pre>
      </form>
      <Link to={`/books/${isbn}`}>
        <button className="secondary m-top">Cancel</button>
      </Link>
    </div>
  );
};
