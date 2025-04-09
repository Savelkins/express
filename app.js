const express = require("express");
const userRouter = require("./routes/user.router");
const homeworkRouter = require("./routes/homework.router");
const booksRouter = require("./routes/book.router");
const errorHandler = require("./errors/errorHandler");
const { validate } = require("./models/User");

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/homeworks" , homeworkRouter);
app.use("/books", booksRouter);

app.use(errorHandler);

module.exports = app;
