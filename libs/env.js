var ENV_DEV = true;

exports.envDev =  function(app) {
	if (app.get('env') != 'development')
		ENV_DEV = false;
}

exports.ENV_DEV = ENV_DEV;