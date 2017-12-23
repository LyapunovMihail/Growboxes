var countSumPriceAndNumber = require('../countSumPriceAndNumber').countSumPriceAndNumber

exports.deleteOrUpdateSessionProducts =  function(req, action) {
  var item = req.body;

  if (action == "update") {
		req.session.products.products.forEach(x => {
				if (x.product._id == item.product._id)
					x.number = item.number
		});
	} else {
		req.session.products.products = req.session.products.products.filter(x => {
				return x.product._id != item.product._id
		});
	}
	
	const sumPriceAndNumber = countSumPriceAndNumber(req.session.products.products);
	req.session.products.sumPrice = sumPriceAndNumber[0];
	req.session.products.numberOfPurchasedProducts = sumPriceAndNumber[1];

}