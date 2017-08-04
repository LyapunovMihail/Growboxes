var Product = require('../../models/product').Product;
var HttpError = require('../../error/index').HttpError;
var AuthError = require('../../models/product').AuthError;
var async = require('async');
var countSumPriceAndNumber = require('./helpMethods/countSumPriceAndNumber').countSumPriceAndNumber

exports.post = function(req, res, next) {
	var productId = req.body.productId;
	var number = req.body.number;

	console.log("req.bodyPURCHASE: ", req.body);
	Product.getProduct(productId, function(err, product) {
		if (err) {
			if (err instanceof AuthError) {
				return next(new HttpError(403, err.message));
			} else {
			return next(err);
			}
		}
			
		if (!req.session.products) {
			req.session.products = {};
			req.session.products.products = [];
		}
		console.log("number: ", number);
		var push = true;

		
		if (req.session.products.products.length > 0) {
			req.session.products.products.forEach(x => {
				console.log("product._id: ", product._id);
				console.log("x.product._id: ", x.product._id);
				if (product._id == x.product._id) {
					console.log("check");
					x.number = +x.number + +number;
					push = false;
				}
			});
		}
		if (push) {
			req.session.products.products.push({"product": product, "number": number});
		}

		const sumPriceAndNumber = countSumPriceAndNumber(req.session.products.products);
		req.session.products.sumPrice = sumPriceAndNumber[0];
		req.session.products.numberOfPurchasedProducts = sumPriceAndNumber[1];

		res.send(req.session.products);
	});
}

exports.get = function(req, res) {
	console.log("req.session.products: ", req.session.products)
	if (!req.session.products) {
		req.session.products = {};
		req.session.products.products = [];
		req.session.products.sumPrice = 0;
		req.session.products.numberOfPurchasedProducts = 0;
	}
	

	res.send(req.session.products);
}

