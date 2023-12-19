import { BookList } from "../components/BookList";
import { Hideable } from "../components/Hideable";
import { useBooks } from "../domain/book/useBooks";

export const BooksScreen = () => {
  const { books, state } = useBooks();

  return (
    <div className="books-screen">
      {state === "initial" ||
        (state === "loading" && (
          <h2 className="text-meta m-top">Loading...</h2>
        ))}
      {state === "error" && (
        <div className="error m-top">Error while fetching books</div>
      )}
      {state === "success" && <BookList books={books} />}
      <section>
        <h2>Imprint</h2>
        <Hideable>Lorem ipsum dolor sit amet...</Hideable>
      </section>
    </div>
  );
};
