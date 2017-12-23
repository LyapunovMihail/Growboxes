var Order = require('../../models/order').Order;
var HttpError = require('../../error/index').HttpError;
var createAndsendMail = require('./helpMethods/mailService/createAndsendMail').createAndsendMail

exports.postOrderData = function(req, res, next) {
	var mailData = req.body.orderData;
	
	if (mailData.personalData.city == "" || mailData.personalData.index == "" ||
		mailData.personalData.adress == "") {
		next(new HttpError(403, "some of required fields are empty"));
	}

	var oders = {};
	Order.saveOrder(mailData, function(err, order) {
		if (err) {
			return next(err);
		}
		orders = order;
	});

	createAndsendMail('order', mailData);

	req.session.products = {
		products: [],
		sumPrice: 0,
		numberOfPurchasedProducts: 0
	};

	res.send(req.session.products);
}

exports.getAllOrders = function(req, res, next) {
	Order.getAllOrders(function(err, orders) {
		if (err) {
			return next(err);
		}
		res.send(orders);
	});
}