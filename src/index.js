import React from "react";
import ReactDOM from "react-dom/client";
import Books from "./books";

import "./index.css";

const BookList = () => {
  const getBook = (id) => {
    const book = Books.find((book) => book.id === id);
    console.log(`${book.id}. selected book: ${book.title}`);
  };
  // getBook(2);
  return (
    <>
      <section className="booklist">
        {Books.map((book) => {
          // const { image, title, author } = book;
          return <Book key={book.id} {...book} getBook={getBook} />;
        })}
      </section>
    </>
  );
};

const Book = ({ id, image, title, author, getBook }) => {
  // console.log(props);
  return (
    <>
      <article className="book">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <button
          onClick={() => getBook(id)}
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
