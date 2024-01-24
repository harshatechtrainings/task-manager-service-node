/** @format */

const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const authRoutes = require("../routes/authRoutes");
const userRoutes = require("../routes/userRoutes");
const taskRoutes = require("../routes/taskRoutes")

const configureMiddleware = (app) => {
  app.use(cors());
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.set("view engine", "ejs");
  
  app.use("/auth", authRoutes);
  app.use("/users", userRoutes);
  app.use("/tasks", taskRoutes);


  // let tasks = [];

  // app.get("/", (req, res) => {
  //   res.render("index", { tasks });
  // });

  // app.post("/add-task", (req, res) => {
  //   const { taskName, category, dueDate, priority } = req.body;
  //   const newTask = { taskName, category, dueDate, priority };
  //   tasks.push(newTask);
  //   res.redirect("/");
  // });

  // app.get("/edit-task/:index", (req, res) => {
  //   const index = req.params.index;
  //   const task = tasks[index];
  //   res.render("edit", { index, task });
  // });

  // app.post("/update-task/:index", (req, res) => {
  //   const index = req.params.index;
  //   const { taskName, category, dueDate, priority } = req.body;
  //   tasks[index] = { taskName, category, dueDate, priority };
  //   res.redirect("/");
  // });

  // app.get("/delete-task/:index", (req, res) => {
  //   const index = req.params.index;
  //   tasks.splice(index, 1);
  //   res.redirect("/");
  // });

};

module.exports = configureMiddleware;
