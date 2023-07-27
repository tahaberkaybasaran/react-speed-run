import React from "react";
import ReactDOM from "react-dom/client";
import Books from "./books";

import "./index.css";

const BookList = () => {
  const value = "some value";
  const displayValue = () => {
    console.log(value);
  };
  return (
    <>
      <section className="booklist">
        {Books.map((book) => {
          // const { image, title, author } = book;
          return <Book key={book.id} {...book} displayValue={displayValue} />;
        })}
      </section>
    </>
  );
};

const Book = ({ image, title, author, displayValue }) => {
  return (
    <>
      <article className="book">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <button
          onClick={displayValue}
          style={{
            margin: "5px",
            fontSize: "17px",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          Display Title
        </button>
        <h3>{author}</h3>
      </article>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
