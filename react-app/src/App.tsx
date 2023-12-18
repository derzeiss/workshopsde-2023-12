import { useEffect, useState } from "react";
import { Book } from "workshops-de_shared";
import { AppHeader } from "./components/AppHeader";
import { BookList } from "./components/BookList";
import { Hideable } from "./components/Hideable";
import { getBooks } from "./domain/book/api";

type FetchState = "initial" | "loading" | "success" | "error";

function App() {
  const [state, setState] = useState<FetchState>("initial");
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    setState("loading");
    getBooks()
      .then((apiBooks) => {
        setState("success");
        setBooks(apiBooks);
      })
      .catch((err) => {
        console.error("FETCH ERR:", err);
        setState("error");
      });
  }, []);

  return (
    <div className="app">
      <AppHeader />
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
}

export default App;
