const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require("dotenv").config();


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({ origin: true, credentials: true }));

app.post("/send", (req, res) => {
    let data = req.body;

    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: process.env.FROM_EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    let mailOptions = {
        from: process.env.FROM_EMAIL,
        to: process.env.TO_EMAIL,
        subject: `Message from ${data.name}`,
        html:`
            <h3>Contact Information</h3>
            <ul>
                <li>Name: ${data.name}</li>
                <li>Email: ${data.email}</li>
                <li>Phone: ${data.phone}</li>
                <li>Address of Event: ${data.address}</li>
                <li>Date of Event: ${data.date}</li>
                <li>Number of Guests: ${data.guests}</li>
                <li>Menu: ${data.menu}</li>
            </ul>

            <h3>Questions</h3>
            <p>${data.question}</p>
        `
    };

    transporter.sendMail(mailOptions, (error, response) => {
        if(error) {
            res.send(error);
        } else {
            res.send("Success");
        }
    });
    
    transporter.verify(function(error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");
        }
    });
})

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})