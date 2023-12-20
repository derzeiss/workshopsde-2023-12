import { useLoaderData, useNavigate } from 'react-router-dom';
import { Form } from '../components/Form';
import { Textbox } from '../components/Textbox';
import { patchBook } from '../domain/book/api';
import { v } from '../domain/forms/validation';
import { Book } from 'workshops-de_shared';
import { FormFieldValue } from '../domain/forms/types/FormFieldValue';

type BookEditFormBucket = Partial<Book>;

const validators = {
  title: [v.required(), v.minLength(5)],
  numPages: [v.number(), v.min(0, 'A book cannot have a negative number of pages')],
  price: [v.pattern(/^\$\d+(\.\d{2})?$/, 'Please enter a price in the format "$0.00"')],
};

export const BookEditScreenWithContext = () => {
  const navigate = useNavigate();
  const book = useLoaderData() as Book;

  const handleSubmit = (values: BookEditFormBucket) => {
    console.log('submit', values);

    const delta = Object.keys(book)
      .filter((key) => {
        const key_typed = key as keyof Book;
        book[key_typed] !== values[key_typed];
      })
      .reduce(
        (bookPatch, key) => {
          const key_typed = key as keyof Book;
          bookPatch[key_typed] = values[key_typed];
          return bookPatch;
        },
        {} as Record<string, FormFieldValue | undefined>,
      ) as Partial<Book>;

    patchBook(book.isbn, delta)
      .then((data) => {
        console.log('Updated successfully. Response:', data);
        navigate(`/books/${book.isbn}`);
      })
      .catch((err) => console.error('Error while updating book. Error:', err));
  };

  return (
    <>
      <Form
        className="book-edit-screen"
        onFormSubmit={handleSubmit}
        initialValues={book}
        validators={validators}
      >
        {(formBucket) => (
          <>
            <Textbox label="Title" name="title" />
            <Textbox label="Subtitle" name="subtitle" />
            <Textbox label="Author" name="author" />
            <Textbox label="Number of pages" name="numPages" type="number" />
            <Textbox label="price" name="price" />

            <button type="submit" className="m-top" disabled={!formBucket.hasChanged}>
              <span>💾</span>
              Save
            </button>

            <pre>{JSON.stringify(formBucket, null, 2)}</pre>
          </>
        )}
      </Form>
    </>
  );
};
