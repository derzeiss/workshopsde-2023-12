import { exampleBooks } from "workshops-de_shared";
import { AppHeader } from "./components/AppHeader";
import { BookList } from "./components/BookList";
import { Hideable } from "./components/Hideable";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <BookList books={exampleBooks} />
      <section>
        <h2>Imprint</h2>
        <Hideable>Lorem ipsum dolor sit amet...</Hideable>
      </section>
    </div>
  );
}

export default App;
