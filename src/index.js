import React from "react";
import ReactDOM from "react-dom/client";

const BookList = () => {
  return (
    <>
      <section>
        <Book />
        <Book />
        <Book />
      </section>
    </>
  );
};

const Book = () => {
  return (
    <>
      <article className="book">
        <Image />
        <Title />
        <Author />
      </article>
    </>
  );
};

const Image = () => {
  return (
    <>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL600_SR600,400_.jpg"
        alt="Lily hasn’t always had it easy, but that’s never stopped her from working hard for the life she wants."
      />
    </>
  );
};
const Title = () => {
  return <h2>It Ends with Us: A Novel</h2>;
};
const Author = () => {
  return <h3>- Colleen Hoover -</h3>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
