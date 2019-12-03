import {nodemailer} from Node;
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'POALA.manage@gmail.com', // your email
      pass: 'POALAKMUTT5' // your email password
    }
  });

  let mailOptions = {
    from: 'POALA.manage@gmail.com',                // sender
    to: 'Wachiraya.nc@mail.kmutt.ac.th',                // list of receivers
    subject: 'Test POALA',              // Mail subject
    html: '<b>Do you receive this mail?</b>'   // HTML body
  };

  function Send(){
      transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});
  }