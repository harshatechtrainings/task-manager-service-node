/** @format */

// routes/authRoutes.js
const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const userMiddleware = require("../middlewares/userMIddleware");

const router = express.Router();

router.delete("/:user", userMiddleware.authorizeUserToDelete, userController.deleteUser);

router.get("/:username", userMiddleware.authorizeUserToDelete, userController.findUserByUsername);

router.get("/user/verify", authController.verify);

router.put("/:username", userMiddleware.authorizeUserToDelete, userController.updateUser);

router.get("/", userMiddleware.authorizeUserToDelete, userController.fetchUsers);

module.exports = router;
