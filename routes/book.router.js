const express = require("express");
const {
  createBook,
  findAllBooks,
  findBookById,
  deleteBookById,
  updateBookById,
} = require("../controllers/book.controller");
const { validateBook, validateBookQuery } = require("../middlewares/book.mw");
const {
  bookSchemaPost,
  bookSchemaUpdate,
  bookSchemaQuery,
} = require("../validations/book.validation");

const booksRouter = express.Router();

booksRouter.post("/", validateBook(bookSchemaPost), createBook);
booksRouter.get("/", validateBookQuery(bookSchemaQuery), findAllBooks);
booksRouter.get("/:bookId", findBookById);
booksRouter.patch("/:bookId", validateBook(bookSchemaUpdate), updateBookById);
booksRouter.delete("/:bookId", deleteBookById);

module.exports = booksRouter;
