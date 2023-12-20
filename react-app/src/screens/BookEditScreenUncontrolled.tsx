import { FormEvent, useRef } from "react";
import { Link, useParams } from "react-router-dom";

export const BookEditScreenUncontrolled = () => {
  const { isbn } = useParams<{ isbn: string }>();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const data = new FormData(ev.target as HTMLFormElement);
    const values = Object.fromEntries(data);
    console.log("values", values);
    console.log("title", data.get("title"));
    console.log("title", data.getAll("multi"));
  };

  return (
    <div className="book-edit-screen">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" name="title" ref={inputRef} />
        </div>

        <div className="m-top">
          <label htmlFor="author">Author</label>
          <input id="author" type="text" name="author" ref={inputRef} />
        </div>

        <div className="m-top">
          <label>
            <input type="checkbox" name="multi" value="one" />
            one
          </label>
          <label>
            <input type="checkbox" name="multi" value="two" />
            two
          </label>
          <label>
            <input type="checkbox" name="multi" value="three" />
            thre
          </label>
        </div>

        <div
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
          className="m-top"
        >
          <button type="submit">
            <span>💾</span>Save
          </button>
          <Link to={`/books/${isbn}`}>
            <button className="tertiary" type="button">
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};
