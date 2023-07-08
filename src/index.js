import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const book_one = {
  atuhor: "David Packman",
  title: "Think Like a Detective",
  image: "./images/amazon-book-think-like-a-detective.jpg",
};

const book_two = {
  atuhor: "Colleen Hover",
  title: "It Starts With Us",
  image: "./images/amazon-book-it-starts-with-us.jpg",
};

const book_three = {
  atuhor: "Barbara Kingsolver",
  title: "Demon Copperhead",
  image: "./images/amazon-book-a-pulitzer-price-winner.jpg",
};

const BookList = () => {
  return (
    <>
      <section className="booklist">
        <Book
          img={book_one.image}
          title={book_one.title}
          author={book_one.atuhor}
        />
        <Book
          img={book_two.image}
          title={book_two.title}
          author={book_two.atuhor}
        />
        <Book
          img={book_three.image}
          title={book_three.title}
          author={book_three.atuhor}
        />
      </section>
    </>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <>
      <article className="book">
        <img src={props.img} alt={props.title} />
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
      </article>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
