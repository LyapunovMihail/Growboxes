var Order = require('../../models/order').Order;
var HttpError = require('../../error/index').HttpError;
var async = require('async');
var ENV_DEV = require('../../libs/env').ENV_DEV;
const nodemailer = require('nodemailer');

exports.postOrderData = function(req, res, next) {
	var orderData = req.body.orderData;
	
	if (orderData.personalData.city == "" || orderData.personalData.index == "" ||
		orderData.personalData.adress == "") {
		next(new HttpError(403, "some of required fields are empty"));
	}
	console.log("orderData: ", orderData);

	var oders = {};
	Order.saveOrder(orderData, function(err, order) {
		if (err) {
			return next(err);
		}
		orders = order;
	});

	var mail_user = 'info@growboxes.ru';
	var mail_pass = 'rbnftw11';

	if (!ENV_DEV) {
		mail_user = process.env.MAIL_USER;
		mail_pass = process.env.MAIL_PASS;
	}
	console.log("ENV_DEV: ", ENV_DEV);
	console.log("process.env.MAIL_USER: ", process.env.MAIL_USER);
	console.log("process.env.MAIL_PASS: ", process.env.MAIL_PASS);
	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
	    host: 'smtp.yandex.ru',
	    port: 465,
	    secure: true, // secure:true for port 465, secure:false for port 587
	    auth: {
	        user: mail_user,
	        pass: mail_pass
	    }
	});

	var orderProducts = ``;
	orderData.productsInBucket.products.forEach(x => {
		orderProducts = orderProducts + `${x.product.name} (${x.product.category}, ${x.product.price} руб) кол-во: ${x.number}, общая цена: ${+x.product.price * +x.number} <br>`;
	});

	var ending = "";
	var sumProductsString = orderData.productsInBucket.numberOfPurchasedProducts + "";
	
	if (sumProductsString.length >= 2 && sumProductsString.substring(sumProductsString.length-2,
			sumProductsString.length) >= 11 && sumProductsString.substring(sumProductsString.length-2,
			sumProductsString.length) <= 19){ 
			ending = "ов";}
	else if (orderData.productsInBucket.numberOfPurchasedProducts % 10 == 0){ 
			ending = "ов";}
	else if (orderData.productsInBucket.numberOfPurchasedProducts % 10 == 1){
			ending = "";}
	else if (orderData.productsInBucket.numberOfPurchasedProducts % 10 >= 2 && 
					 orderData.productsInBucket.numberOfPurchasedProducts % 10 <= 4 ){
			ending = "а";}
	else {
		ending = "ов"
	}

	orderProducts = orderProducts + `Итого: ${orderData.productsInBucket.numberOfPurchasedProducts} товар${ending}, ${orderData.productsInBucket.sumPrice} руб`;

	// setup email data with unicode symbols
	let mailOptions = {
	    from: '<info@growboxes.ru>', // sender address
	    to: 'info@growboxes.ru', // list of receivers
	    subject: 'ПОКУПКА ТОВАРОВ growboxes.ru', // Subject line
	    //text: 'Hello world ?', // plain text body
	    html: `
	    	<h3 style="font-size:15px">Покупки</h3>
	    	<p>${orderProducts}</p>

	    	<h3 style="font-size:15px">Персональные данные покупателя</h3>
	    	<b>Email: ${orderData.personalData.email}</b> <br>
	    	<b>Имя: ${orderData.personalData.name}</b> <br>
	    	<b>Фамилия: ${orderData.personalData.surname}</b> <br>
	    	<b>Отчество: ${orderData.personalData.patronymic}</b> <br>
	    	<b>Телефон: ${orderData.personalData.telephone}</b> <br> <br>

	    	<b>Регион: ${orderData.personalData.region}</b> <br>
	    	<b>Город: ${orderData.personalData.city}</b> <br>
	    	<b>Почтовый индекс: ${orderData.personalData.index}</b> <br>
	    	<b>Адрес: ${orderData.personalData.adress}</b> <br>
	    `
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, (error, info) => {
	    if (error) {
	        return console.log(error);
	    }
	    console.log('Message %s sent: %s', info.messageId, info.response);
	});

	req.session.products = {};
	req.session.products.products = [];
	req.session.products.sumPrice = 0;
	req.session.products.numberOfPurchasedProducts = 0;

	res.send(req.session.products);
	
}

exports.getAllOrders = function(req, res, next) {
	
	Order.getAllOrders(function(err, orders) {
		if (err) {
			return next(err);
		}
		res.send(orders);
	});

}