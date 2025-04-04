const Book = require("../models/Book");

module.exports.createBook = async (req, res, next) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).send({ data: newBook });
  } catch (error) {
    next(error);
  }
};
module.exports.findAllBooks = async (req, res, next) => {
  try {
    const { title, author, genre, year, available, minYear, maxYear } =
      req.query;

    const filter = {};
    if (title) {
      filter.title = new RegExp(title, "i");
    }
    if (author) {
      filter.author = new RegExp(author, "i");
    }
    if (genre) {
      filter.genre = new RegExp(genre, "i");
    }
    if (year) {
      filter.year = Number(year);
    }
    if (minYear || maxYear) {
      filter.year = {};
      if (maxYear) {
        filter.year.$lt = Number(maxYear);
      }

      if (minYear) {
        filter.year.$gte = Number(minYear);
      }
    }
    if (available) {
      filter.available = available === "yes";
    }

    const books = await Book.find(filter);
    res.status(200).send({ data: books });
  } catch (error) {
    next(error);
  }
};
module.exports.findBookById = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.bookId);
    if (!book) {
      return res.status(404).send({ data: "book not found" });
    }
    res.status(200).send({ data: book });
  } catch (error) {
    next(error);
  }
};
module.exports.updateBookById = async (req, res, next) => {
  try {
    const updateBook = await Book.findByIdAndUpdate(
      req.params.bookId,
      req.body,
      { new: true }
    );
    if (!updateBook) {
      return res.status(404).send({ data: "book not found" });
    }
    res.status(200).send({ data: updateBook });
  } catch (error) {
    next(error);
  }
};
module.exports.deleteBookById = async (req, res, next) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.bookId);
    if (!deletedBook) {
      return res.status(404).send({ data: "book not found" });
    }
    res.status(200).send({ data: deletedBook });
  } catch (error) {
    next(error);
  }
};
