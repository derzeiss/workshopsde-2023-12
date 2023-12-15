import { AppHeader } from "./components/AppHeader";
import { BookList } from "./components/BookList";
import { exampleBooks } from "workshops-de_shared";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <BookList books={exampleBooks} />
    </div>
  );
}

export default App;
