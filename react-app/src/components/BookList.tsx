import { Book } from "../domain/book/Book";
import { BookListItem } from "./BookListItem";

interface BookListProps {
  books: Book[];
}

const formatPrice = (amount: number) => {
  return Intl.NumberFormat(navigator.language, {
    currency: "USD",
    style: "currency",
  }).format(amount);
};

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
  const minPages = books.map((book) => book.numPages).sort()[0];
  const maxPages = books.map((book) => book.numPages).sort()[books.length - 1];

  const minPriceSort = formatPrice(
    books.map((b) => +b.price.substring(1)).sort((a, b) => a - b)[
      books.length - 1
    ]
  );

  const maxPriceReduce = books
    .map((book) => +book.price.substring(1))
    .reduce((prev, curr) => Math.max(prev, curr));

  return (
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
        <BookListItem book={b} />
      ))}
    </div>
  );
};
