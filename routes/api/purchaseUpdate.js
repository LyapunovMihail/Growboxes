var HttpError = require('../../error/index').HttpError;
var deleteOrUpdateSessionProducts = require('./helpMethods/forPurchaseUpdate/deleteOrUpdateSessionProducts').deleteOrUpdateSessionProducts

exports.update = function(req, res, next) {

	deleteOrUpdateSessionProducts(req, "update")

	res.send(req.session.products);
}

exports.delete = function(req, res, next) {

	deleteOrUpdateSessionProducts(req, "delete")

	res.send(req.session.products);
}
