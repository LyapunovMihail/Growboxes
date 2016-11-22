var User = require('./models/user').User;
var mongoose = require('./libs/mongoose');
var async = require('async');


mongoose.connection.on('open', function() {
	var db = mongoose.connection.db;
	db.dropDatabase(function(err){
		if(err) throw err;
		
		async.parallel([

			function(callback) {
				var vasya = new User({username: 'Вася'})
				vasya.save(function(err) {
					callback(err, vasya);
				});
			},
			function(callback) {
				var petya = new User({username: 'Петя'})
				petya.save(function(err) {
					callback(err, petya);
				});
			},
			function(callback) {
				var admin = new User({username: 'admin'})
				admin.save(function(err) {
					callback(err, admin);
				});
			}
		], function(err, results){
			console.log(arguments);
			mongoose.disconnect();
		})

	}); 
});


