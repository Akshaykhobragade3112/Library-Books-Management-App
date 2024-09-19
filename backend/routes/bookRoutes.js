const express = require('express');
const { addBook, removeBook, issueBook, getAllBooks } = require('../controllers/bookController');

const router = express.Router();

router.post('/', addBook);        // Add a new book
router.delete('/books/:id', removeBook); // Remove a book by ID
router.put('/books/issue/:id', issueBook); // Issue a book by ID
router.get('/books', getAllBooks);       // View all available books

module.exports = router;
