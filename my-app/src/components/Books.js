import React, { useState } from "react";
import BookTable from "./BookTable";
import DisplayBoard from "./DisplayBoard";
import CreateBook from "./CreateBook";
import { getAllBooks, createBook } from "../services/BookService";

const Books = () => {
  const [bookShelf, setBookShelf] = useState({});
  const [books, setBooks] = useState([]);
  const [numberOfBooks, setNumberBooks] = useState(0);

  const handleSubmit = () => {
    createBook(bookShelf).then(() => {
      setNumberBooks(numberOfBooks + 1);
    });
  };

  const getAllBook = () => {
    getAllBooks().then((data) => {
      setBooks(data);
      setNumberBooks(data.length);
    });
  };

  const handleOnChangeForm = (e) => {
    let inputData = bookShelf;
    if (e.target.name === "book") {
      bookShelf.book = e.target.value;
    } else if (e.target.name === "category") {
      bookShelf.category = e.target.value;
    } else if (e.target.name === "author") {
      bookShelf.author = e.target.value;
    }
    setBookShelf(inputData);
  };

  return (
    <div className="main books">
      
      <CreateBook
        bookShelf={bookShelf}
        onChangeForm={handleOnChangeForm}
        handleSubmit={handleSubmit}
      />
      <DisplayBoard numberOfBooks={numberOfBooks} getAllBook={getAllBook} />
      <BookTable books={books} />
      
    </div>
  );
};

export default Books;
