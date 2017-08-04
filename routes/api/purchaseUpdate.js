var Product = require('../../models/product').Product;
var HttpError = require('../../error/index').HttpError;
var AuthError = require('../../models/product').AuthError;
var async = require('async');
var countSumPriceAndNumber = require('./helpMethods/countSumPriceAndNumber').countSumPriceAndNumber

exports.update = function(req, res, next) {
	var item = req.body;
	console.log("req.body: ", req.body)
	
	console.log("req.session.products.products: ", req.session.products.products)

	req.session.products.products.forEach(x => {
  		if (x.product._id == item.product._id)
  			x.number = item.number
	});

	

	const sumPriceAndNumber = countSumPriceAndNumber(req.session.products.products);
	console.log("sumPriceAndNumber: ", sumPriceAndNumber)
	req.session.products.sumPrice = sumPriceAndNumber[0];
	req.session.products.numberOfPurchasedProducts = sumPriceAndNumber[1];

	res.send(req.session.products);
}

exports.delete = function(req, res, next) {
	var item = req.body;
	console.log("req.body: ", req.body)

	req.session.products.products = req.session.products.products.filter(x => {
  		return x.product._id != item.product._id
	});

	const sumPriceAndNumber = countSumPriceAndNumber(req.session.products.products);
	req.session.products.sumPrice = sumPriceAndNumber[0];
	req.session.products.numberOfPurchasedProducts = sumPriceAndNumber[1];

	res.send(req.session.products);
}
