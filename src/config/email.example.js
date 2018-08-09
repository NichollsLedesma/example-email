const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'correoEnvio@gmail.com',
        pass: 'supassword'
    }
});

module.exports = transporter;

