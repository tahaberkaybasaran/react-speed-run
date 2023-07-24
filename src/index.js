import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const book_array = [
  {
    author: "David Packman",
    title: "Think Like a Detective",
    image: "./images/amazon-book-think-like-a-detective.jpg",
  },

  {
    author: "Colleen Hover",
    title: "It Starts With Us",
    image: "./images/amazon-book-it-starts-with-us.jpg",
  },

  {
    author: "Barbara Kingsolver",
    title: "Demon Copperhead",
    image: "./images/amazon-book-a-pulitzer-price-winner.jpg",
  },

  {
    author: "David Grann",
    title: "The Wager: A Tale of Shipwreck",
    image: "./images/amazon-book-a-tale-of-shipwreck.jpg",
  },
];

const BookList = () => {
  return (
    <>
      <section className="booklist">
        {book_array.map((book) => {
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
