import React from "react";

const Book = ({ id, image, title, author, getBook, bookNumber }) => {
  // console.log(props);
  return (
    <>
      <article className="book">
        <span className="bookNumber" style={{ fontSize: "2rem" }}>
          {`${bookNumber + 1}#`}
        </span>
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

export default Book;
