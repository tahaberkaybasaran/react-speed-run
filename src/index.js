import React from "react";
import ReactDOM from "react-dom/client";
import { books } from "./books";
import Book from "./Book";
import ShopTitle from "./ShopTitle";

import "./index.css";

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(`${book.id}. selected book: ${book.title}`);
  };
  // getBook(2);
  return (
    <>
      <section className="booklist">
        <ShopTitle />
        {books.map((book, index) => {
          // const { image, title, author } = book;
          return (
            <Book
              key={book.id}
              {...book}
              getBook={getBook}
              bookNumber={index}
            />
          );
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
