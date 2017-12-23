var countSumPriceAndNumber = require('../countSumPriceAndNumber').countSumPriceAndNumber

exports.addOrUpdateSessionProducts =  function(req, product) {

	var number = req.body.number;
		
	if (!req.session.products) {
		req.session.products = {
			products: [],
			sumPrice: 0,
			numberOfPurchasedProducts: 0
		};
	}

	var addNewProduct = true;
	
	if (req.session.products.products.length > 0) {
		req.session.products.products.forEach(x => {
			if (product._id == x.product._id) {
				x.number = +x.number + +number;
				addNewProduct = false;
			}
		});
	}
	if (addNewProduct) {
		req.session.products.products.push({"product": product, "number": number});
	}

	const sumPriceAndNumber = countSumPriceAndNumber(req.session.products.products);
	req.session.products.sumPrice = sumPriceAndNumber[0];
	req.session.products.numberOfPurchasedProducts = sumPriceAndNumber[1];

}