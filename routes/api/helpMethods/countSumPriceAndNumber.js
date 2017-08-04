exports.countSumPriceAndNumber =  function(productsInBucket) {
  var sumPrice = 0;
  var numberOfPurchasedProducts = 0;
	productsInBucket.forEach(x => {
		sumPrice = sumPrice + +x.product.price*+x.number
		numberOfPurchasedProducts += +x.number
	})
 return [sumPrice, numberOfPurchasedProducts]
}