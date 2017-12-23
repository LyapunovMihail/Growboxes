var Product = require('../../models/product').Product;
var HttpError = require('../../error/index').HttpError;
var async = require('async');

exports.getProductDetails = function(req, res, next) {
	var productId = req.body.productId;
	
	Product.getProduct(productId, function(err, product) {
		if (err) return next(err);
		req.session.productDetails = product;
		res.send(req.session.productDetails);
	});
}

exports.get = function(req, res) {
	res.send(req.session.productDetails);
}
