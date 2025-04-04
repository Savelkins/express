const express = require("express");
const {
  createHomework,
  findAllHomeworks,
  findHomeworkById,
  updateHomeworkById,
  deleteHomeworkById,
} = require("../controllers/homework.controller");

const homeworkRouter = express.Router();

homeworkRouter.post("/", createHomework);
homeworkRouter.get("/", findAllHomeworks);
homeworkRouter.get("/:homeworkId", findHomeworkById);
homeworkRouter.patch("/:homeworkId", updateHomeworkById);
homeworkRouter.delete("/:homeworkId", deleteHomeworkById);

module.exports = homeworkRouter;
