// app.js

const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const configureMiddleware = require("./src/config/middleware");
const db = require("./src/config/db");

const app = express();
const port = process.env.APP_PORT;
configureMiddleware(app);

app.listen(port, async() => {
  console.log(`Server is running at http://localhost:${port}`);
  await db.connectToDatabase();
});
