
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var config = require('./config');
//var mongoose = require('./libs/mongoose');
//"mongodb://localhost/test"
//"mongodb://heroku_4t11kqhm:lt57ddmudpes3qv1lglpfh5qq4@ds127063.mlab.com:27063/heroku_4t11kqhm"
var HttpError = require('./error/index').HttpError;

console.log("process.env.PORT: ", process.env.PORT);
console.log("process.env.PORT || config.get('port'): ", process.env.PORT || config.get('port'));
var port = process.env.PORT || config.get('port');



var app = express();
app.set('port', port);

app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname);
app.set('view engine', 'ejs');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.cookieParser());

var sessionStore = require('./libs/sessionStore');

app.use(express.session({
	secret: config.get('session:secret'),
	key: config.get('session:key'),
	cookie: config.get('session:cookie'),
	store: sessionStore
}));

/*app.use(function(req, res, next) {
	req.session.numberOfVisits = req.session.numberOfVisits + 1 || 1;
	res.send("Visits: " + req.session.numberOfVisits);
});*/

app.use(require('./middleware/sendHttpError'));
//app.use(require('./middleware/loadUser'));

app.use(app.router);
require('./routes')(app);

app.use(express.static(path.join(__dirname, '/public/shop')));


app.use(function(err,req,res, next) {
	//Node_ENV = 'production';
	if(typeof err == 'number') {
		err = new HttpError(err);
	}
	if(err instanceof HttpError) {
		res.sendHttpError(err);
	}
	else {
		if(app.get('env') == 'development') {
			express.errorHandler(err,req,res, next);		
		}
		else {
			log.error(err);
			err = new HttpError(500);
			res.sendHttpError(err);
		}
	}
});

var server = http.createServer(app);
server.listen(port, function(){
  console.log('Express server listening on port ' + port);
});

//var io = require('./socket/index')(server);
//app.set('io', io);
