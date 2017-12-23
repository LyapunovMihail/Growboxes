exports.sortProducts =  function(products, field) {
	if (field == 'created') {
		products.sort((a,b) => {
			var keyA = new Date(a[field]);
	    var keyB = new Date(b[field]);

	    if(keyA < keyB) return -1;
	    if(keyA > keyB) return 1;
	  	return 0
		});
	} else {
		products.sort((a,b) => {
			var keyA = a[field];
	    var keyB = b[field];

	    if(keyA < keyB) return -1;
	    if(keyA > keyB) return 1;
	  	return 0
		});
	}
}