const express = require("express");
const { createUser } = require("./controllers/userController");
const app = express();

app.use(express.json());

app.post("/users", createUser);

module.exports = app;
