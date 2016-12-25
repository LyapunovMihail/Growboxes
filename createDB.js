var mongoose = require('./libs/mongoose');
var async = require('async');

async.series([
	open,
	dropDatabase,
	requireModels,
	createUsers,
	close
], function(err, results) {
	console.log(arguments);
	mongoose.disconnect();
	process.exit(err ? 255 : 0);
});

function open(callback) {
	mongoose.connection.on('open', callback);
}

function dropDatabase(callback) {
	var db = mongoose.connection.db;
	db.dropDatabase(callback);
}

function requireModels(callback) {
	require('./models/user')
	async.each(Object.keys(mongoose.models), function(modelName, callback) {
		mongoose.models[modelName].ensureIndexes(callback);
	}, callback);

}

function createUsers(callback) {
	
	var users = [
		{username: 'Вася'},
		{username: 'Петя'},
		{username: 'admin'}
	];

	async.each(users, function(userdata, callback) {
		var user = new mongoose.models.User(userdata);
		user.save(callback)
	}, callback);
	
}

function close(callback) {
	
}



