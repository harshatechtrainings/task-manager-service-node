/** @format */

// routes/authRoutes.js
const express = require("express");
const taskController = require("../controllers/taskController");

const router = express.Router();

router.get("/", taskController.getTasks);
router.post("/add-task", taskController.addTask);
router.get("/edit-task/:index", taskController.editTask);
router.post("/update-task/:index", taskController.updateTask);
router.get("/delete-task/:index", taskController.deleteTask);

module.exports = router;
