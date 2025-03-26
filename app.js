const express = require("express");
const app = express();

app.get("/user/:userId", (req, res) => {
  const response = req.params.userId;
  res.send(`<h1>${response}</h1>`);
});

module.exports = app;
