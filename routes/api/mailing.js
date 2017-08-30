var HttpError = require('../../error/index').HttpError;
var config = require('../../config');
const nodemailer = require('nodemailer');

exports.sendMail = function(req, res, next) {
	var mailData = req.body.data;

	if (mailData.email == "") {
		next(new HttpError(403, "some of required fields are empty"));
	}

	var mail_user = process.env.MAIL_USER || config.get('mail:user');
	var mail_pass = process.env.MAIL_PASS || config.get('mail:pass');

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
	    host: 'smtp.yandex.ru',
	    port: 465,
	    secure: true, // secure:true for port 465, secure:false for port 587
	    auth: {
	        user: mail_user,
	        pass: mail_pass
	    }
	});

	// setup email data with unicode symbols
	let mailOptions = {
	    from: '<info@growboxes.ru>', // sender address
	    to: 'info@growboxes.ru', // list of receivers
	    subject: `Вопрос от клиента ${mailData.email} для growboxes.ru`, // Subject line
	    html: `
	    	<h3 style="font-size:15px">От ${mailData.name}, email: ${mailData.email}, 
	    	телефон: ${mailData.telephone}</h3>
	    	<p>${mailData.text}</p>
	    `
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, (error, info) => {
	    if (error) {
	        return console.log(error);
	    }
	});

	res.send(true);
	
}