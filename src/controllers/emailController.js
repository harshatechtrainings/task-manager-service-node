/** @format */
const config = require("config");
const { sendEmail } = require("../utils/emailService");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const path = require("path");

const emailService = (username) => {
  const token = generateToken(username);
  const subject = "Account Verification";
  const verificationUrl = `http://localhost:3000/users/user/verify?token=${token}`;

  // Read the email template
  const emailTemplatePath = path.join(__dirname, "../template/emailTemplate.html");
  const emailTemplate = fs.readFileSync(emailTemplatePath, "utf-8");

  // Replace these values dynamically
  const dynamicValues = {
    username: username, // Replace with the actual username
    verificationUrl: verificationUrl,
  };

  // Replace placeholders with actual values
  const renderedEmail = emailTemplate.replace(
    /{{(.*?)}}/g,
    (match, p1) => dynamicValues[p1.trim()] || ""
  );

  sendEmail(username, subject, renderedEmail)
    .then((info) => {
      console.log("Email sent:", info);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
};

const generateToken = (username) => {
  return jwt.sign({ username: username }, process.env.JWT_SECRET, {
    expiresIn: config.get("security.emailtokenexperiation"),
  });
};

/**
 * Verify a JWT token.
 * @param {string} token - JWT token to verify.
 * @returns {Promise<object>} - Resolves to the decoded user information if the token is valid.
 */
const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
};

module.exports = { emailService, verifyToken };
