// const nodemailer = require('nodemailer');
import nodemailer from 'nodemailer';

const password = process.env.APP_PASS;

// Function to send an email
const sendEmail = (outputData) => {
    // Create a nodemailer transporter using your email service's SMTP settings
    const transporter = nodemailer.createTransport({
      service: 'gmail', // e.g., 'gmail', 'hotmail', etc.
      auth: {
        user: 'shivam.mishracs99@gmail.com',
        pass: `${password}`,
      },
    });
  
    // Define the email message
    const mailOptions = {
      from: 'shivammishra2628@gmail.com',
      to: 'shivammishragayatri@gmail.com',
      subject: 'OpenAI Processed Data',
      text: `Here is the processed data from OpenAI:\n\n${outputData}`,
    };
  
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
}

sendEmail("Create a nodemailer transporter using your email service's SMTP settings");

