var checkAuth = require('../middleware/checkAuth');

module.exports = function(app) {

	app.get('/', require('./frontpage').get);
	app.get('/special_offer', require('./frontpage').get);
	app.get('/normal', require('./frontpage').get);
	app.get('/contact', require('./frontpage').get);
	app.get('/products', require('./frontpage').get);
	app.get('/product_summary', require('./frontpage').get);
	app.get('/product_details', require('./frontpage').get);
	app.get('/login', require('./frontpage').get);
	app.get('/register', require('./frontpage').get);




	/*
	app.get('/login', require('./login').get);
	app.post('/login', require('./login').post);
	app.post('/logout', require('./logout').post);

	app.get('/chat', checkAuth, require('./chat').get);
	*/
}