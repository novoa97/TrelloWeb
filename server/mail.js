
var nodemailer = require('nodemailer'); 
// email sender function 
exports.sendEmail = function(req, res){
// nodemailer stuff will go here

    var transp1orter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'trello@jediupc.com',
            pass: ''
        }
    });
    var mailOptions = {
        from: 'trello@jediupc.com',
        to: req.correu,
        subject: 'Targeta creada',
        text: 'La targeta ha sigut creada'
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) console.log(err);
        else console.log('Email sent: ' + info.response);
    })
};


