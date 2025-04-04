const express = require("express");
const {
  createBook,
  findAllBooks,
  findBookById,
  deleteBookById,
  updateBookById,
} = require("../controllers/book.controller");

const booksRouter = express.Router();

booksRouter.post("/", createBook);
booksRouter.get("/", findAllBooks);
booksRouter.get("/:bookId", findBookById);
booksRouter.patch("/:bookId", updateBookById);
booksRouter.delete("/:bookId", deleteBookById);

module.exports = booksRouter;
