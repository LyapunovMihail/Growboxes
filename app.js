
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var config = require('./config');

var app = express();
app.set('port', config.get('port'));

app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname + '/template');
app.set('view engine', 'ejs');


app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next) {
	res.render('index', {title: '<b>HELL</b>'});
});

app.use(function(err,req,res, next) {
	//Node_ENV = 'production';
	if(app.get('env') == 'development') {
		var errorHandler = express.errorHandler();
		errorHandler(err,req,res, next);
	}
	else {
		res.send(500);
	}
});


http.createServer(app).listen(config.get('port'), function(){
  console.log('Express server listening on port ' + config.get('port'));
});

/*var routes = require('./routes');
var user = require('./routes/user');

// all environments
app.set('port', process.env.PORT || 3000);



// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
*/
