import { ChangeEventHandler, FormEvent, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Book } from 'workshops-de_shared';
import { useBook } from '../domain/book/useBook';
import { editBook } from '../domain/book/api';

export const BookEditScreen = () => {
  const { isbn } = useParams<{ isbn: string }>();
  const { book, state } = useBook(isbn);
  // using own variable here to prevent mutating book
  const [formValues, setFormValues] = useState<Book>({
    id: '',
    title: '',
    subtitle: '',
    isbn: '',
    abstract: '',
    numPages: 0,
    author: '',
    publisher: '',
    price: '',
    cover: '',
  });

  const [touched, setTouched] = useState<Partial<Record<keyof Book, boolean>>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof Book, string>>>({});
  const [saveMsg, setSaveMsg] = useState<string>();

  // update title error
  useEffect(() => {
    const titleErr =
      formValues.title?.length < 5 ? 'Title must be at least 5 characters long.' : undefined;

    setErrors({ ...errors, title: titleErr });
  }, [formValues.title]); // eslint-disable-line react-hooks/exhaustive-deps

  // prefill form with data from api
  useEffect(() => {
    if (!book) return;
    setFormValues({ ...book });
  }, [book]);

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log(formValues.title);
    editBook(formValues)
      .then(() => {
        setSaveMsg('Saved successfully!');
      })
      .catch((err) => {
        console.error(err);
        setSaveMsg('Error while saving.');
      })
      .finally(() => {
        setTimeout(() => {
          setSaveMsg(undefined);
        }, 5000);
      });
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (ev) =>
    setFormValues({ ...formValues, [ev.target.name]: ev.target.value });

  if (state === 'initial' || state === 'loading') return <h2>Loading...</h2>;

  return (
    <div className="book-edit-screen">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            value={formValues.title}
            onChange={handleChange}
            formNoValidate
            onBlur={() => setTouched({ ...touched, title: true })}
          />
          {touched.title && errors.title && <div className="error">{errors.title}</div>}
        </fieldset>

        <fieldset className="m-top">
          <label htmlFor="author">Author</label>
          <input
            id="author"
            type="text"
            name="author"
            value={formValues.author}
            onChange={handleChange}
          />
        </fieldset>

        <button type="submit" className="m-top">
          <span>💾</span>Save
        </button>
        {saveMsg && <div>{saveMsg}</div>}

        <pre>{JSON.stringify(formValues, null, 2)}</pre>
      </form>
      <Link to={`/books/${isbn}`}>
        <button className="secondary m-top">Cancel</button>
      </Link>
    </div>
  );
};
