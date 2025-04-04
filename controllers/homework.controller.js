const Homework = require("../models/Homework");

module.exports.createHomework = async (req, res, next) => {
  try {
    const newHomework = await Homework.create(req.body);
    res.status(201).send({ data: newHomework });
  } catch (error) {
    next(error);
  }
};
module.exports.findAllHomeworks = async (req, res, next) => {
  try {
    const { subject, task, deadline } = req.query;
    const filter = {};
    if (subject) {
      filter.subject = new RegExp(subject, "i");
    }
    if (task) {
      filter.task = new RegExp(task, "i");
    }
    if (deadline) {
      filter.deadline = deadline;
    }

    const homeworks = await Homework.find(filter);
    res.status(200).send({ data: homeworks });
  } catch (error) {
    next(error);
  }
};
module.exports.findHomeworkById = async (req, res, next) => {
  try {
    const homework = await Homework.findById(req.params.homeworkId);
    if (!homework) {
      return res.status(404).send({ data: "user not found" });
    }
    res.status(200).send({ data: homework });
  } catch (error) {
    next(error);
  }
};
module.exports.updateHomeworkById = async (req, res, next) => {
  try {
    const updatedHomework = await Homework.findByIdAndUpdate(
      req.params.homeworkId,
      req.body,
      { new: true }
    );
    if (!updatedHomework) {
      return res.status(404).send({ data: "homework not found" });
    }
    res.status(200).send({ data: updatedHomework });
  } catch (error) {
    next(error);
  }
};
module.exports.deleteHomeworkById = async (req, res, next) => {
  try {
    const deletedHomeWork = await Homework.findByIdAndDelete(
      req.params.homeworkId
    );
    if (!deletedHomeWork) {
      return res.status(404).send({ data: "homework not found" });
    }
    res.status(200).send({ data: deletedHomeWork });
  } catch (error) {
    next(error);
  }
};
