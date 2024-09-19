import React, { useState } from 'react';
import { issueBook } from '../services/bookService';
import './IssueBook.css'; // Import the new CSS for Issue Book

const IssueBook = () => {
  const [bookId, setBookId] = useState('');
  const [message, setMessage] = useState('');

  const handleIssue = async (e) => {
    e.preventDefault();
    try {
      await issueBook(bookId);
      setMessage('Book issued successfully');
      setBookId('');
    } catch (err) {
      setMessage('Failed to issue book');
    }
  };

  return (
    <div className="issue-book-container">
      <h2>Issue Book</h2> {/* Centered title at the top */}
      <form onSubmit={handleIssue} className="issue-book-form">
        <input
          type="text"
          placeholder="Book ID"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
        />
        <button type="submit">Issue Book</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default IssueBook;
