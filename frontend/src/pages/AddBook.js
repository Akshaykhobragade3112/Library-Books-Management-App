import React, { useState } from 'react';
import { addBook } from '../services/bookService';
import './AddBook.css'; // Import the new CSS

const AddBook = () => {
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addBook({ bookName, author });
      setMessage('Book added successfully');
      setBookName('');
      setAuthor('');
    } catch (err) {
      setMessage('Failed to add book');
    }
  };

  return (
    <div className="add-book-container">
      <h2>Add Book</h2> {/* This title will now be centered */}
      <form onSubmit={handleSubmit} className="add-book-form">
        <input
          type="text"
          placeholder="Book Name"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddBook;
