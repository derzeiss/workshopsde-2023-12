import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import { ErrorScreen } from "./screens/ErrorScreen";
import { AboutScreen } from "./screens/AboutScreen";
import { BooksScreen } from "./screens/BooksScreen";
import { CounterScreen } from "./screens/CounterScreen";
import { BookDetailScreen } from "./screens/BookDetailScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorScreen msg="app" />,
    children: [
      {
        path: "/",
        loader: () => redirect("/books"),
      },
      {
        path: "/books",
        element: <BooksScreen />,
        errorElement: <ErrorScreen msg="books" />,
      },
      {
        path: "/books/:isbn",
        element: <BookDetailScreen />,
      },
      {
        path: "/about",
        element: <AboutScreen />,
        errorElement: <ErrorScreen msg="about" />,
      },
      {
        path: "/counter",
        element: <CounterScreen />,
      },
    ],
  },
]);
