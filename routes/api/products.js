var Product = require('../../models/product').Product;
var HttpError = require('../../error/index').HttpError;
var AuthError = require('../../models/product').AuthError;
var async = require('async');
var countSumPriceAndNumber = require('./helpMethods/countSumPriceAndNumber').countSumPriceAndNumber

exports.getAccessToProdutcsManagement = function(req, res, next) {
	console.log("req.body: ", req.body)
	var password = req.body.password;

	if (password == "kevrik")
		res.send({"access": true});
	else
		res.send({"access": false});
}

exports.post = function(req, res, next) {
	console.log("req.body: ", req.body)
	var name = req.body.name;
	var category = req.body.category;
	var properties = req.body.properties;
	var description = req.body.description;
	var price = req.body.price;
	var imgUrl = req.body.imgUrl;
	var imgUrl1 = req.body.imgUrl1;
	var imgUrl2 = req.body.imgUrl2;
	var imgUrl3 = req.body.imgUrl3;
	var imgUrl4 = req.body.imgUrl4;
	var imgUrl5 = req.body.imgUrl5;
	var imgUrl6 = req.body.imgUrl6;

	Product.saveProduct(name, category, properties, description, price, imgUrl, imgUrl1, imgUrl2, imgUrl3, imgUrl4,
		imgUrl5, imgUrl6, function(err, product) {
		if (err) {
			if (err instanceof AuthError) {
				return next(new HttpError(403, err.message));
			} else {
			return next(err);
			}
		}

		//req.session.product = product._id;
		res.send(product);
	});

}

exports.update = function(req, res, next) {
	console.log("req.body: ", req.body)
	var name = req.body.name;
	var category = req.body.category;
	var properties = req.body.properties;
	var description = req.body.description;
	var price = req.body.price;
	var imgUrl = req.body.imgUrl;
	var imgUrl1 = req.body.imgUrl1;
	var imgUrl2 = req.body.imgUrl2;
	var imgUrl3 = req.body.imgUrl3;
	var imgUrl4 = req.body.imgUrl4;
	var imgUrl5 = req.body.imgUrl5;
	var imgUrl6 = req.body.imgUrl6;

	Product.updateProduct(name, category, properties, description, price, imgUrl, imgUrl1, imgUrl2, imgUrl3, imgUrl4,
		imgUrl5, imgUrl6, function(err, product) {
		if (err) {
			if (err instanceof AuthError) {
				return next(new HttpError(403, err.message));
			} else {
			return next(err);
			}
		}

		//req.session.product = product._id;
		res.send(product);
	});

}

exports.delete = function(req, res, next) {

	let data = {_id: req.body._id};

	Product.deleteProduct(data, function(err, product) {
		if (err) {
			if (err instanceof AuthError) {
				return next(new HttpError(403, err.message));
			} else {
			return next(err);
			}
		}

		let numberOfProductsInBucketBeforeDeleting = req.session.products.numberOfPurchasedProducts;


		if (req.session.products.products.length > 0) {
			req.session.products.products = req.session.products.products.filter(x => {
				return data.name != x.product.name && data.description != x.product.description &&
					data.price != x.product.price;
			});
		}


		const sumPriceAndNumber = countSumPriceAndNumber(req.session.products.products);
		req.session.products.sumPrice = sumPriceAndNumber[0];
		req.session.products.numberOfPurchasedProducts = sumPriceAndNumber[1];

		let response = {};
		response.numberOfPurchasedProducts = req.session.products.numberOfPurchasedProducts;

		var message = "";
		if (req.session.products.numberOfPurchasedProducts != numberOfProductsInBucketBeforeDeleting) {
			message = ". Этот товар был также удалён из корзины";
		}

		response.message = message
		response.product = product;

		res.send(response);
	});

}

exports.get = function(req, res, next) {

	Product.getAllProducts(function(err, products) {
		if (err) {
			if (err instanceof AuthError) {
				return next(new HttpError(403, err.message));
			} else {
			return next(err);
			}
		}

		//req.session.product = product._id;
		res.send(products);
	});

}

exports.getCategoryProducts = function(req, res, next) {

	var category = req.body.category;
	
	Product.getCategoryProducts(category, function(err, products) {
		if (err) {
			if (err instanceof AuthError) {
				return next(new HttpError(403, err.message));
			} else {
			return next(err);
			}
		}

		res.send(products);
	});

}

