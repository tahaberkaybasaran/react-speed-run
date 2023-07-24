import React from "react";
import ReactDOM from "react-dom/client";
import Books from "./books";

import "./index.css";

const BookList = () => {
  return (
    <>
      <section className="booklist">
        {Books.map((book) => {
          // const { image, title, author } = book;
          return <Book key={book.id} {...book} />;
        })}
      </section>
    </>
  );
};

const Book = (props) => {
  const { image, title, author } = props;
  return (
    <>
      <article className="book">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <h3>{author}</h3>
      </article>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
