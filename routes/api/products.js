var Product = require('../../models/product').Product;
var HttpError = require('../../error/index').HttpError;
var config = require('../../config');
var deleteDeletedProductFromSession = require('./helpMethods/forProducts/deleteDeletedProductFromSession').deleteDeletedProductFromSession
var sortProducts = require('./helpMethods/forProducts/sortProducts').sortProducts

exports.getAccessToProdutcsManagement = function(req, res, next) {
	var password = req.body.password;

	if (password == config.get('save_product_pass'))
		res.send({"access": true});
	else
		res.send({"access": false});
}

exports.post = function(req, res, next) {
	var newProduct = req.body;
	Product.saveProduct(newProduct, function(err, product) {
		if (err) return next(err);
		res.send(product);
	});

}

exports.update = function(req, res, next) {
	var updatingProduct = req.body;
	Product.updateProduct(updatingProduct, function(err, product) {
		if (err) return next(err);
		res.send(product);
	});
}

exports.delete = function(req, res, next) {
	let deletingProduct = req.body;
	Product.deleteProduct(deletingProduct, function(err, product) {
		if (err) return next(err);
		let response = deleteDeletedProductFromSession(req, deletingProduct, product)
		res.send(response);
	});
}

exports.get = function(req, res, next) {
	Product.getAllProducts(function(err, products) {
		if (err) return next(err);
		res.send(products);
	});
}

exports.getCategoryProducts = function(req, res, next) {
	var category = req.body.category;
	Product.getCategoryProducts(category, function(err, products) {
		if (err) return next(err);
		sortProducts(products, 'created');
		res.send(products);
	});
}

