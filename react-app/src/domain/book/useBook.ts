import { useState, useEffect } from "react";
import { FetchState, Book } from "workshops-de_shared";
import { getBook } from "./api";

export const useBook = (isbn?: string) => {
  const [state, setState] = useState<FetchState>("initial");
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    if (!isbn) return;

    setState("loading");
    getBook(isbn)
      .then((book) => {
        setState("success");
        setBook(book);
      })
      .catch((err) => {
        console.error("FETCH ERR:", err);
        setState("error");
      });
  }, [isbn]);

  return { book, state };
};
