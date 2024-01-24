const mongoose = require("mongoose");

// Define the Task schema
const taskSchema = new mongoose.Schema({
  userId: {
    type: String,
    require: true,
  },
  taskName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  priority: {
    type: String,
    // enum: ["low", "medium", "high"], // You can customize the priority levels as needed
    required: true,
  },
});

// Create the Task model
const Task = mongoose.model("Task", taskSchema);

// Export the Task model
module.exports = Task;
