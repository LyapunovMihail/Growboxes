var ENV_DEV = true;

module.exports.envDev =  function(app) {
	if (app.get('env') != 'development') {
		ENV_DEV = false;
	}
}

exports.ENV_DEV = ENV_DEV;