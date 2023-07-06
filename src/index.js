import React from "react";
import ReactDOM from "react-dom/client";

const Greeting = () => {
  return (
    <>
      <React.StrictMode>
        <h2>First Reeact Component</h2>
        <Book />
        <Person />
        <Message />
      </React.StrictMode>
    </>
  );
};

const Book = () => {
  return (
    <>
      <input type="text" name="" id="" />
      <hr />
      <h3>hello</h3>
    </>
  );
};

const Person = () => {
  return <div>hi im a person</div>;
};
const Message = () => {
  return <div>hi im a Message from another space</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
