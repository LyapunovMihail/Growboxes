var countSumPriceAndNumber = require('../countSumPriceAndNumber').countSumPriceAndNumber

exports.deleteDeletedProductFromSession =  function(req, deletingProduct, product) {

	let numberOfProductsInBucketBeforeDeleting = req.session.products.numberOfPurchasedProducts;

	if (req.session.products.products.length > 0) {
		req.session.products.products = req.session.products.products.filter(x => {
			return deletingProduct.name != x.product.name;
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

	return response;
}