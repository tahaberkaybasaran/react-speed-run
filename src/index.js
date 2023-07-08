import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const author1 = "- David Packman -";
const author2 = "- Colleen Hover -";
const author3 = "- Barbara KingSolver -";
const title1 = "Think Like a Detective";
const title2 = "It Starts With Us";
const title3 = "Demon Copperhead";
const image1 = "./images/amazon-book-think-like-a-detective.jpg";
const image2 = "./images/amazon-book-it-starts-with-us.jpg";
const image3 = "./images/amazon-book-a-pulitzer-price-winner.jpg";

const BookList = () => {
  return (
    <>
      <section className="booklist">
        <Book img={image1} title={title1} author={author1} />
        <Book img={image2} title={title2} author={author2} />
        <Book img={image3} title={title3} author={author3} />
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
