import { AppHeader } from "./components/AppHeader";
import { BookList } from "./components/BookList";
import { Counter } from "./components/Counter";
import { Hideable } from "./components/Hideable";
import { useBooks } from "./domain/book/useBooks";
import { useCrazyCounter } from "./domain/counter/useCounter";

function App() {
  const { books, state } = useBooks();

  return (
    <div className="app">
      <AppHeader />
      <Counter initialValue={3} useCounter={useCrazyCounter} />
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
