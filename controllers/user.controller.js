const User = require("../models/User");

module.exports.createUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).send({ data: newUser });
  } catch (error) {
    next(error);
  }
};
module.exports.findAllUsers = async (req, res, next) => {
  try {
    const filter = {};
    const { gender, minAge, maxAge, login } = req.query;
    if (gender) {
      filter.isMale = gender === "male";
    }
    if (minAge || maxAge) {
      filter.age = {};
      if (minAge) {
        filter.age.$gte = Number(minAge);
      }
      if (maxAge) {
        filter.age.$lt = Number(maxAge);
      }
    }
    if (login) {
      filter.login = new RegExp(login, "i");
    }
    const users = await User.find(filter);
    res.status(200).send({ data: users });
  } catch (error) {
    next(error);
  }
};
module.exports.findUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).send({ data: "user not found" });
    }
    res.status(200).send({ data: user });
  } catch (error) {
    next(error);
  }
};
module.exports.updateUserById = async (req, res, next) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.userId,
      req.body,
      { new: true }
    );
    if (!updateUser) {
      return res.status(404).send({ data: "user not found" });
    }

    res.status(200).send({ data: updateUser });
  } catch (error) {
    next(error);
  }
};
module.exports.deleteUserById = async (req, res, next) => {
  try {
    const deleteUser = await User.findOneAndDelete(req.params.userId);
    if (!deleteUser) {
      return res.status(404).send({ data: "user not found" });
    }
    res.status(200).send({ data: deleteUser });
  } catch (error) {
    next(error);
  }
};
