/** @format */

const nodemailer = require("nodemailer");

// Create a test SMTP account at Ethereal
// Visit https://ethereal.email/create to get your test credentials
const testAccount = {
  user: process.env.EMAIL_SENDER,
  pass: process.env.EMAIL_APPPASS,
  smtp: {
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
  },
};

/**
 * Creates an SMTP transporter using the provided credentials.
 */
const transporter = nodemailer.createTransport({
  ...testAccount.smtp,
  auth: {
    user: testAccount.user,
    pass: testAccount.pass,
  },
});

/**
 * Sends an email.
 * @param {string} to - Email address of the recipient.
 * @param {string} subject - Email subject.
 * @param {string} html - HTML content of the email.
 * @returns {Promise} - A promise that resolves when the email is sent successfully.
 */
const sendEmail = (to, subject, html) => {
  const mailOptions = {
    from: testAccount.user,
    to,
    subject,
    html,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
};

module.exports = { sendEmail };
