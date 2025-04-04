const express = require("express");
const userRouter = require("./routes/user.router");
const homeworkRouter = require("./routes/homework.router");
const booksRouter = require("./routes/book.router");

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/homeworks", homeworkRouter);
app.use("/books", booksRouter);

app.use((err, req, res, next) => {
  //   console.log(err);
  res.status(500).send({ errors: [err.message] });
});

module.exports = app;
