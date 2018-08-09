const routes = require('express').Router();
const path = require('path');
const nodemailer = require('nodemailer'),
    transporter = require('./config/email');

routes.post('/email', async (req, res) => {
    let fromIn = 'correoEnvio@gmail.com';
    let { toIn, ccIn, subjectIn, textIn } = req.body;
    await nodemailer.createTestAccount((err, account) => {  
        let mailOptions = {
            from: fromIn, 
            to: toIn,
            cc: ccIn,
            subject: subjectIn, 
            text: textIn,
            attachments: [{
                path: path.join(__dirname,'files/certificado.pdf'),
                contentType: 'application/pdf'
            }]
        };
        transporter.sendMail(mailOptions);
        // caso testing
        // transporter.sendMail(mailOptions, (error, info) => {
        //     if (error) {
        //         return console.log(error);
        //         res.send('ha ocurrido un error');
        //     } else {
        //         console.log(info);
        //         res.send('email enviado');
        //     }
        // });
    });
    es.send('email enviado');
});

module.exports = routes;