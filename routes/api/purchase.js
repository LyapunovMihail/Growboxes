var Product = require('../../models/product').Product;
var HttpError = require('../../error/index').HttpError;
var async = require('async');
var addOrUpdateSessionProducts = require('./helpMethods/forPurchase/addOrUpdateSessionProducts').addOrUpdateSessionProducts


exports.post = function(req, res, next) {
	var productId = req.body.productId;
	Product.getProduct(productId, function(err, product) {
		if (err) return next(err);
  	addOrUpdateSessionProducts(req, product)
		res.send(req.session.products);
	});
}

exports.get = function(req, res) {
	if (!req.session.products) {
		req.session.products = {
			products: [],
			sumPrice: 0,
			numberOfPurchasedProducts: 0
		};
	}
	res.send(req.session.products);
}

