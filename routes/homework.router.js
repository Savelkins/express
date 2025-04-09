const express = require("express");
const {
  createHomework,
  findAllHomeworks,
  findHomeworkById,
  updateHomeworkById,
  deleteHomeworkById,
} = require("../controllers/homework.controller");
const {
  validateHomework,
  validateHomeworkQuery,
} = require("../middlewares/homework.mw");
const {
  homeworkSchemaPost,
  homeworkSchemaUpdate,
  homeworkSchemaQuery,
} = require("../validations/homework.validaton");

const homeworkRouter = express.Router();

homeworkRouter.post("/", validateHomework(homeworkSchemaPost), createHomework);
homeworkRouter.get(
  "/",
  validateHomeworkQuery(homeworkSchemaQuery),
  findAllHomeworks
);
homeworkRouter.get("/:homeworkId", findHomeworkById);
homeworkRouter.patch(
  "/:homeworkId",
  validateHomework(homeworkSchemaUpdate),
  updateHomeworkById
);
homeworkRouter.delete("/:homeworkId", deleteHomeworkById);

module.exports = homeworkRouter;
