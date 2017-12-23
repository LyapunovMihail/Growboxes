var HttpError = require('../../error/index').HttpError;
var createAndsendMail = require('./helpMethods/mailService/createAndsendMail').createAndsendMail

exports.sendMail = function(req, res, next) {
	var mailData = req.body.data;
	if (mailData.email == "") {
		next(new HttpError(403, "some of required fields are empty"));
	}
	createAndsendMail('clientQuestion', mailData);
	res.send(true);
}