const nodemailer = require('nodemailer');
var config = require('../../../../config');

exports.createAndsendMail =  function(mailQuery, mailData) {

	let mailOptions = createLetter(mailQuery, mailData);
	let transporter = createTransporter();

	transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
	});
}

function createTransporter() {
	var mail_user = process.env.MAIL_USER || config.get('mail:user');
	var mail_pass = process.env.MAIL_PASS || config.get('mail:pass');

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

	return transporter
}

function createLetter(mailQuery, mailData) {

	let mailOptions;

	if (mailQuery == 'order') {

		var orderProducts = ``;
		mailData.productsInBucket.products.forEach(x => {
			orderProducts = orderProducts + `${x.product.name} (${x.product.category}, ${x.product.price} руб) кол-во: ${x.number}, общая цена: ${+x.product.price * +x.number} <br>`;
		});

		var ending = prepareStringEnding(mailData);

		orderProducts = orderProducts + `Итого: ${mailData.productsInBucket.numberOfPurchasedProducts} товар${ending}, ${mailData.productsInBucket.sumPrice} руб`;

		mailOptions = {
	    from: '<info@growboxes.ru>', // sender address
	    to: 'info@growboxes.ru', // list of receivers
	    subject: 'ПОКУПКА ТОВАРОВ growboxes.ru', // Subject line
	    //text: 'Hello world ?', // plain text body
	    html: `
	    	<h3 style="font-size:15px">Покупки</h3>
	    	<p>${orderProducts}</p>

	    	<h3 style="font-size:15px">Персональные данные покупателя</h3>
	    	<b>Email: ${mailData.personalData.email}</b> <br>
	    	<b>Имя: ${mailData.personalData.name}</b> <br>
	    	<b>Фамилия: ${mailData.personalData.surname}</b> <br>
	    	<b>Отчество: ${mailData.personalData.patronymic}</b> <br>
	    	<b>Телефон: ${mailData.personalData.telephone}</b> <br> <br>

	    	<b>Регион: ${mailData.personalData.region}</b> <br>
	    	<b>Город: ${mailData.personalData.city}</b> <br>
	    	<b>Почтовый индекс: ${mailData.personalData.index}</b> <br>
	    	<b>Адрес: ${mailData.personalData.adress}</b> <br>
	    `
		};
	} else if (mailQuery == 'clientQuestion') {
		mailOptions = {
	    from: '<info@growboxes.ru>', // sender address
	    to: 'info@growboxes.ru', // list of receivers
	    subject: `Вопрос от клиента ${mailData.email} для growboxes.ru`, // Subject line
	    html: `
	    	<h3 style="font-size:15px">От ${mailData.name}, email: ${mailData.email}, 
	    	телефон: ${mailData.telephone}</h3>
	    	<p>${mailData.text}</p>
	    `
		}; 	
	} 

	return mailOptions
}

function prepareStringEnding(mailData) {
	var ending = "";
	var sumProductsString = mailData.productsInBucket.numberOfPurchasedProducts + "";
	
	if (sumProductsString.length >= 2 && sumProductsString.substring(sumProductsString.length-2,
			sumProductsString.length) >= 11 && sumProductsString.substring(sumProductsString.length-2,
			sumProductsString.length) <= 19){ 
			ending = "ов";}
	else if (mailData.productsInBucket.numberOfPurchasedProducts % 10 == 0){ 
			ending = "ов";}
	else if (mailData.productsInBucket.numberOfPurchasedProducts % 10 == 1){
			ending = "";}
	else if (mailData.productsInBucket.numberOfPurchasedProducts % 10 >= 2 && 
					 mailData.productsInBucket.numberOfPurchasedProducts % 10 <= 4 ){
			ending = "а";}
	else {
		ending = "ов"
	}

	return ending
}