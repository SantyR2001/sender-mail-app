const express = require('express');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
const app = express();
const cors= require('cors');

//Settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//Routes
app.post('/send-email', (req, res) => {
    const {email, affair, message} = req.body;
    res.send('received');
})

//Server
app.listen(3000, () => {
    console.log('server on port 3000')
})