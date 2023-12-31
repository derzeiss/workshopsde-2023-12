import { Book, formatPrice } from 'workshops-de_shared';
import { BookListItem } from './BookListItem';
import { ThemeContext } from '../domain/theme/ThemeContext';
import { useState } from 'react';

interface BookListProps {
  books: Book[];
}

// const str: string = 1 + "" + String(1);
// const num: number = +"1" + Number("2") + parseInt("3") + parseFloat("4.23");
// const boolean: boolean = !!1;

// console.log(str, num, boolean);

// const getMinMax = <T,>(
//   arr: T[],
//   mapPredicate: (item: T) => number,
//   minMaxFn: (...args: number[]) => number
// ) => {
//   return arr.map(mapPredicate).reduce((prev, curr) => minMaxFn(prev, curr));
// };

export const BookList = ({ books }: BookListProps) => {
  const [primaryColor, setPrimaryColor] = useState('green');
  const minPages = books.map((book) => book.numPages).sort()[0];
  const maxPages = books.map((book) => book.numPages).sort()[books.length - 1];

  const minPriceSort = formatPrice(
    books.map((b) => +b.price.substring(1)).sort((a, b) => a - b)[books.length - 1],
  );

  const maxPriceReduce = books
    .map((book) => +book.price.substring(1))
    .reduce((prev, curr) => Math.max(prev, curr), 0);

  return (
    <ThemeContext.Provider value={{ primaryColor, setPrimaryColor }}>
      <div className="book-list">
        <small>Number of books: {books.length}</small>
        <br />
        <small>Minimum number of pages: {minPages}</small>
        <br />
        <small>Maximum number of pages: {maxPages}</small>
        <br />
        <small>Minimum price: {minPriceSort}</small>
        <br />
        <small>Maximum price: {maxPriceReduce}</small>
        {books.map((b) => (
          <BookListItem key={b.id} book={b} />
        ))}
      </div>
    </ThemeContext.Provider>
  );
};
