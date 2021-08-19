require('dotenv').config();

const nodemailer = require('nodemailer');

////////////////////////////////////////////////////////////////
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});
////////////////////////////////////////////////////////////////
let mailOptions = {
  from: 'tabitaoprea29@gmail.com',
  to: 'andreea.oprea99@e-uvt.ro',
  subject: 'cevasubiect',
  text: 'cevatext'
};

////////////////////////////////////////////////////////////////
transporter.sendMail(mailOptions, function (err, data) {
  if (err) {
    console.log('Error');

  }
  else {
    console.log('Sent mail');
  }
});