
var nodemailer = require('nodemailer');


var transp1orter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'marquitus99@gmail.com',
        pass: ''
    }
});
var mailOptions = {
    from: 'marquitus99@gmail.com',
    to: 'marc.amoros.trepat@gmail.com',
    subject: 'Targeta creada',
    text: 'La targeta ha sigut creada'
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    else console.log('Email sent: ' + info.response);
})
