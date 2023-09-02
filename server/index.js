import { connectToDatabase, createDocument } from "./Database.js";

import nodemailer from 'nodemailer';

const password = process.env.APP_PASS;

import Express from "express";
const app = Express();
import bodyParser from "body-parser";
import cors from 'cors';

const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(bodyParser.json());


const sendEmail = (email,sendData) => {
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
      to: `${email}`,
      subject: 'Form Submitted  Data',
      text: `Here is the data you submitted:\n${JSON.stringify(sendData, null, 2)}`,
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



app.post('/',async (req,res) => {
    const {email,...Data} = req.body;

    console.log(email);

    try{
      const connected = await connectToDatabase();
      if(connected) {
          await createDocument(email,Data);
          sendEmail(req.body.email,Data);
          res.send();
      }
      else {
        console.log("Database connection error : Please check your network conectivity");
      }
    }
    catch (error){
        console.log(error);
    }
    
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });