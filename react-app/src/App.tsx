import { exampleBooks } from "workshops-de_shared";
import { AppHeader } from "./components/AppHeader";
import { BookList } from "./components/BookList";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <BookList books={exampleBooks} />
    </div>
  );
}

export default App;
