import React, { useEffect, useState } from 'react';
import { viewBooks } from '../services/bookService';
import './ViewBooks.css'; // Import the new CSS for View Books

const ViewBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await viewBooks();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="view-books-container">
      <h2>View All Books</h2> {/* Centered title at the top */}
      {books.length > 0 ? (
        <ul className="books-list">
          {books.map((book) => (
            <li key={book._id}>
              {book.bookName} by {book.author} {book.issued && '(Issued)'}
            </li>
          ))}
        </ul>
      ) : (
        <p>No books available</p>
      )}
    </div>
  );
};

export default ViewBooks;
