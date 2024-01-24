const Task = require("../models/Tasks");
const { StatusMessage } = require("../utils/statusMessage");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

let tasks;

const getTasks = async (req, res) => {
  const myTasks = await Task.find();
  tasks = myTasks;

  const myList = myTasks.map((task) => {
    const taskObject = task.toObject();
    return { ...taskObject, dueDate: formatDueDate(taskObject.dueDate) };
  });

  console.log(myList);
  res.render("index", { myList });
};

const formatDueDate = (dateString) => {
  const dateObject = new Date(dateString);
  return dateObject.toISOString().split("T")[0];
};

const addTask = async (req, res) => {
  const { taskName, category, dueDate, priority } = req.body;
  const TaskInfo = { taskName, category, dueDate, priority };
  const newTask = new Task({
    userId: "jdbfwbklrfgr",
    taskName,
    category,
    dueDate,
    priority,
  });

  await newTask.save();
  tasks.push(TaskInfo);
  res.redirect("/tasks/");
};

const editTask = async (req, res) => {
  const index = req.params.index;
  const taskDetails = await Task.findById(index);
  //   const task = tasks[index];
  const taskObject = taskDetails.toObject();
  //converts date string to date format
  const task = { ...taskObject, dueDate: formatDueDate(taskDetails._doc.dueDate) };
  res.render("edit", { index, task });
};

const updateTask = async (req, res) => {
  const index = req.params.index;
  // Get the schema paths from the Mongoose model
  const modelPaths = Object.keys(Task.schema.paths);

  // Check if all keys in the request body are present in the model schema
  const isValidFields = Object.keys(req.body).every((key) => modelPaths.includes(key));
  if (isValidFields) {
    const taskDetails = await Task.findByIdAndUpdate(
      index,
      {
        $set: req.body,
      },
      { new: true }
    );
    //   tasks[index] = { taskName, category, dueDate, priority };
    res.redirect("/tasks/");
  }
};

const deleteTask = async (req, res) => {
  const index = req.params.index;
  const taskDetails = await Task.findByIdAndDelete(index);
  //   tasks.splice(index, 1);
  res.redirect("/tasks/");
};

module.exports = { getTasks, addTask, editTask, updateTask, deleteTask };
