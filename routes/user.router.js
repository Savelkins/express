const express = require("express");

const {
  createUser,
  findAllUsers,
  findUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.get("/", findAllUsers);
userRouter.get("/:userId", findUserById);
userRouter.patch("/:userId", updateUserById);
userRouter.put("/:userId", updateUserById);
userRouter.delete("/:userId", deleteUserById);

module.exports = userRouter;
