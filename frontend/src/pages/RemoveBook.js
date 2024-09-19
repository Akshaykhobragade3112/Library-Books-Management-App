import React, { useState } from 'react';
import { removeBook } from '../services/bookService';
import './RemoveBook.css'; // Import the new CSS for Remove Book

const RemoveBook = () => {
  const [bookId, setBookId] = useState('');
  const [message, setMessage] = useState('');

  const handleRemove = async (e) => {
    e.preventDefault();
    try {
      await removeBook(bookId);
      setMessage('Book removed successfully');
      setBookId('');
    } catch (err) {
      setMessage('Failed to remove book');
    }
  };

  return (
    <div className="remove-book-container">
      <h2>Remove Book</h2> {/* Centered title at the top */}
      <form onSubmit={handleRemove} className="remove-book-form">
        <input
          type="text"
          placeholder="Book ID"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
        />
        <button type="submit">Remove Book</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default RemoveBook;
