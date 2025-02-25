const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); // Load environment variables from .env

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS if frontend is on a different domain

// SMTP Transporter Configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587, // Use 465 for SSL or 587 for TLS
  secure: false, // False for TLS, true for SSL
  auth: {
    user: process.env.EMAIL, // Your email
    pass: process.env.PASSWORD, // Your email App Password
  },
});

// API Route to Send Email
app.post('/api/send', async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL, // Sender's email
    to: 'indreshjaiswal231223@gmail.com', // Recipient email
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully');
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('❌ Error sending email:', error.message || error);
    res.status(500).send(`Error sending email: ${error.message || error}`);
  }
});

// Start the server
const PORT = process.env.PORT || 3033;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
