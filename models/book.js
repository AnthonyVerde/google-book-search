const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  src: String,
  title: String,
  authors: Array,
  date: String,
  description: String,
  link: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
