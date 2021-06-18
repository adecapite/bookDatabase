const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    author: [{type: String}],
    description: String,
    img: String,
    link: String
});

const Book = mongoose.model("book", bookSchema)

module.exports = Book;