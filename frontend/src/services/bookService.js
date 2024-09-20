import axios from 'axios';

const API_URL = 'https://library-books-management-app.onrender.com/books';

export const addBook = async (bookData) => {
  return await axios.post(`${API_URL}`, bookData);
};

export const removeBook = async (bookId) => {
  const response = await fetch(`/api/books/${bookId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to remove book');
  }
  return await response.json();
};


export const issueBook = async (bookId) => {
  const response = await fetch(`/api/books/issue/${bookId}`, {
    method: 'PUT',
  });
  if (!response.ok) {
    throw new Error('Failed to issue book');
  }
  return await response.json();
};


export const viewBooks = async () => {
  const response = await fetch('/api/books');
  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }
  return await response.json();
};
