const express = require("express");
const app = express();

app.get("/users/:id", (req, res) => {
  const request = `
  ${req.path}
  ${req.params.id}
 `;

  res.end(`<h1>Hello from express</h1>
    <p>${request}</p>
    `);
});

module.exports = app;
