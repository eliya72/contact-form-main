const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;

// app.use("/", (req, res) => {
//     res.send("Server is running");
// });

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/', (req, res)=>{
    // console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'this.is.my.test.mail2024@gmail.com',
            pass: 'zmbyrjmnlzylasxq'
        }
    });

    const mailOptions = {
        from: req.body.Email,
        to: 'this.is.my.test.mail2024@gmail.com',
        subject: 'Message from my Contact Form',
        text: `First Name: ${req.body.FirstName}\nSecond Name: ${req.body.SecondName}\nEmail: ${req.body.Email}\nQuery Type: ${req.body.QueryType}\nMessage: ${req.body.Message}`
    };

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log('error');
            res.send('error');
        }else{
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    });
});

// app.listen(PORT, ()=>{
//     console.log(`Server running on port ${PORT}`);
// });


// const nodemailer = require('nodemailer');

// export default async function (req, res) {
//     if (req.method === 'POST') {
//         const { FirstName, SecondName, Email, QueryType, Message } = req.body;

//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: 'this.is.my.test.mail2024@gmail.com',
//                 pass: 'zmbyrjmnlzylasxq'
//             }
//         });

//         const mailOptions = {
//             from: Email,
//             to: 'this.is.my.test.mail2024@gmail.com',
//             subject: 'Message from Contact Form',
//             text: `First Name: ${FirstName}\nSecond Name: ${SecondName}\nEmail: ${Email}\nQuery Type: ${QueryType}\nMessage: ${Message}`
//         };

//         try {
//             await transporter.sendMail(mailOptions);
//             res.status(200).json({ message: 'success' });
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ message: 'error' });
//         }
//     } else {
//         res.status(405).json({ message: 'Method Not Allowed' });
//     }
// }