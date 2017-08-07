var checkAuth = require('../middleware/checkAuth');

module.exports = function(app) {
	app.get('/', require('./frontpage').get);
	app.get('/home', require('./frontpage').get);
	app.get('/special_offer', require('./frontpage').get);
	app.get('/normal', require('./frontpage').get);
	app.get('/contact', require('./frontpage').get);
	app.get('/products/growboxes', require('./frontpage').get);
	app.get('/product_summary', require('./frontpage').get);
	app.get('/checkout', require('./frontpage').get);
	app.get('/product_details/*' , require('./frontpage').get);
	/*app.get('/login', require('./frontpage').get);
	app.get('/register', require('./frontpage').get);*/
	app.get('/save_product', require('./frontpage').get);

	app.get('/purchase', require('./api/purchase').get);

	app.post('/api/products', require('./api/products').post);
	app.get('/api/products', require('./api/products').get);
	app.post('/api/productsUpdate', require('./api/products').update);
	app.post('/api/productsDelete', require('./api/products').delete);
	app.post('/api/categoryProducts', require('./api/products').getCategoryProducts);

	app.post('/api/purchase', require('./api/purchase').post);
	app.get('/api/purchase', require('./api/purchase').get);

	app.post('/api/purchaseUpdate', require('./api/purchaseUpdate').update);
	app.post('/api/purchaseDelete', require('./api/purchaseUpdate').delete);

	app.post('/api/product_details', require('./api/product_details').post);

	app.post('/api/products/getAccess', require('./api/products').getAccessToProdutcsManagement);
}