const express = require("express");

const {
  createUser,
  findAllUsers,
  findUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/user.controller");
const { validateUser, validateUserQuery } = require("../middlewares/user.mw");
const {
  userSchemaPost,
  userSchemaUpdate,
  userSchemaQuery,
} = require("../validations/user.validation");

const userRouter = express.Router();

userRouter.post("/", validateUser(userSchemaPost), createUser);
userRouter.get("/", validateUserQuery(userSchemaQuery), findAllUsers);
userRouter.get("/:userId", findUserById);
userRouter.patch("/:userId", validateUser(userSchemaUpdate), updateUserById);
userRouter.put("/:userId", updateUserById);
userRouter.delete("/:userId", deleteUserById);

module.exports = userRouter;
