# Task Manager Service Node

### task-manager-service-node

The Task Manager Service Node is a Node.js application designed to efficiently organize tasks, send reminders via email, and prioritize tasks based on user-defined parameters. Users can create tasks, specifying priorities and completion times, and the system will automatically send reminders to ensure timely completion. The application leverages MongoDB to store task details, facilitating seamless retrieval and display in the user interface.

## Features

**Task Categorization:** Users can categorize tasks based on priority and completion time during task creation.

**Reminder System:** The application sends reminders via email to prompt users to complete tasks based on their specified priorities and completion times.

**Data Storage:** Task details, including priority and completion time, are stored in MongoDB for efficient data management.

**User Interface Integration:** The application provides a user-friendly interface to interact with and visualize tasks stored in the MongoDB database.

## Getting Started

Follow these steps to set up and run the Task Manager Service Node:

1. Clone the Repository:

```bash
git clone https://github.com/your-username/task-manager-service-node.git
cd task-manager-service-node
```

2. Install Dependencies:

```bash
npm install
```

## Configure MongoDB:

Update the MongoDB connection details in the configuration file (`.env`) to point to your MongoDB instance with below prperties

```bash
APP_PORT=<PORT>
MONGODB_URI=<MANGODB URI>
JWT_SECRET=<JWT SECRTE CODE>
EMAIL_SENDER=<SENDERGAMIL>
EMAIL_APPPASS=<APP PASSCODE>
```

## Run the Application:

```bash
npm start
```

The application will be accessible at http://localhost:3000.

## Usage

**Create a Task:**

- Navigate to the user interface and use the provided form to create a new task.
- Specify task details, including priority and completion time.
- Receive Reminders:

- The application will automatically send reminders via email based on the specified task priorities and completion times.

**View and Manage Tasks:**

- Access the user interface to view, edit, and mark tasks as completed.
- Task details are seamlessly fetched from the MongoDB database for display.
