var mongoose = require('../libs/mongoose');
Schema = mongoose.Schema;

var Schema = new Schema({
	username: {
		type: String,
		unique: true,
		require: true
	},
	created: {
		type: Date,
		default: Date.now
	}
});

exports.User = mongoose.model('User', Schema);