/**
 * DTO for a book object.
 */
export interface Book {
  id: string;
  title: string;
  subtitle: string;
  isbn: string;
  abstract: string;
  numPages: 123;
  author: string;
  publisher: string;
  price: "$..";
  cover: "http://….png";
}
