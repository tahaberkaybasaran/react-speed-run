import React from "react";
import ReactDOM from "react-dom/client";
import Books from "./books";

import "./index.css";

const BookList = () => {
  return (
    <>
      <section className="booklist">
        {Books.map((book) => {
          return (
            <Book img={book.image} title={book.title} author={book.author} />
          );
        })}
      </section>
    </>
  );
};

const Book = ({ img, title, author }) => {
  console.log({ img, title, author });
  // const { img, title, author } = props;
  return (
    <>
      <article className="book">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h3>{author}</h3>
      </article>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
