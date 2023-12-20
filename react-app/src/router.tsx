import { createBrowserRouter, redirect } from 'react-router-dom';
import App from './App';
import { AboutScreen } from './screens/AboutScreen';
import { BookDetailScreen } from './screens/BookDetailScreen';
import { BookEditScreen } from './screens/BookEditScreen';
import { BooksScreen } from './screens/BooksScreen';
import { CounterScreen } from './screens/CounterScreen';
import { ErrorScreen } from './screens/ErrorScreen';
import { BookEditScreenUncontrolled } from './screens/BookEditScreenUncontrolled';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorScreen msg="app" />,
    children: [
      {
        path: '/',
        loader: () => redirect('/books'),
      },
      {
        path: '/books',
        element: <BooksScreen />,
        errorElement: <ErrorScreen msg="books" />,
      },
      {
        path: '/books/:isbn',
        element: <BookDetailScreen />,
      },
      {
        path: '/books/:isbn/edit',
        element: <BookEditScreen />,
      },
      {
        path: '/books/:isbn/editUncontrolled',
        element: <BookEditScreenUncontrolled />,
      },
      {
        path: '/about',
        element: <AboutScreen />,
        errorElement: <ErrorScreen msg="about" />,
      },
      {
        path: '/counter',
        element: <CounterScreen />,
      },
    ],
  },
]);
