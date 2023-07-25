import React from "react";
import ReactDOM from "react-dom/client";
import Books from "./books";

import "./index.css";

const BookList = () => {
  return (
    <>
      <section className="booklist">
        <EventExample />
        {Books.map((book) => {
          // const { image, title, author } = book;
          return <Book key={book.id} {...book} />;
        })}
      </section>
    </>
  );
};

const EventExample = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };
  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          style={{ margin: "1rem 0", width: "10rem", height: "1.5rem" }}
          onChange={(event) => {
            if (event.target.value.length > 10) {
              alert("You have reached to 10 character limit");
            }
          }}
        />
        <button type="submit">submit</button>
      </form>
      <button onClick={() => alert("Button Has Clicked")}>click</button>
    </section>
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
