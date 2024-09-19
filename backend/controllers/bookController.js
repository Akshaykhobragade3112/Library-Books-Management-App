const Book = require('../models/Book');

// Add Book
exports.addBook = async (req, res) => {
  const { bookName, author } = req.body;

  try {
    const newBook = await Book.create({ bookName, author });
    res.status(201).json({ message: 'Book added successfully', newBook });
  } catch (error) {
    res.status(400).json({ message: 'Failed to add book', error });
  }
};

// Remove a book by ID
exports.removeBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(bookId);
    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ message: 'Book removed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error removing book' });
  }
};


// Issue a book
exports.issueBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const issuedBook = await Book.findByIdAndUpdate(
      bookId,
      { issued: true },
      { new: true }
    );
    if (!issuedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ message: 'Book issued successfully', book: issuedBook });
  } catch (error) {
    res.status(500).json({ message: 'Error issuing book' });
  }
};

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books' });
  }
};
