const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  issued: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Book', bookSchema);
