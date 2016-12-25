var config = require('../config');
var connect = require('connect'); // npm i connect
var async = require('async');
var cookie = require('cookie');   // npm i cookie
var cookieParser = require('cookie-parser');
var sessionStore = require('../libs/sessionStore');
var HttpError = require('../error/index').HttpError;
var User = require('../models/user').User;

function loadSession(sid, callback) {

  // sessionStore callback is not quite async-style!
  sessionStore.load(sid, function(err, session) {
    if (arguments.length == 0) {
      // no arguments => no session
      return callback(null, null);
    } else {
      return callback(null, session);
    }
  });

}

function loadUser(session, callback) {

  if (!session.user) {
    return callback(null, null);
  }

  User.findById(session.user, function(err, user) {
    if (err) return callback(err);

    if (!user) {
      return callback(null, null);
    }
    callback(null, user);
  });

}

module.exports = function(server) {
  var io = require('socket.io').listen(server);
  io.set('origins', 'localhost:*');
console.log("check");

  io.use(function(socket, next) {
    async.waterfall([
      function(callback) {
        // сделать handshakeData.cookies - объектом с cookie
        var handshakeData = socket.request;
        console.log("check2");
        handshakeData.cookies = cookie.parse(handshakeData.headers.cookie || '');
        console.log("handshakeData.cookies", handshakeData.cookies);
        var sidCookie = handshakeData.cookies[config.get('session:key')];
        console.log("sidCookie", sidCookie);
        var sid = cookieParser.signedCookie(sidCookie, config.get('session:secret'));
        console.log("check12");
        loadSession(sid, callback);
      },
      function(session, callback) {
        if (!session) {
          callback(new HttpError(401, "No session"));
        }
        socket.handshake.session = session;
        console.log("socket.handshake.session", socket.handshake.session);
        loadUser(session, callback);
      },
      function(user, callback) {
        if (!user) {
          callback(new HttpError(403, "Anonymous session may not connect"));
        }
        socket.handshake.user = user;
        console.log("socket.handshake.user", socket.handshake.user);
        
        next();
      }

    ], function(err) {
    	console.log("checkins");
      if (!err) {
        return callback(null, true);
      }
			console.log("check6");
      if (err instanceof HttpError) {
        return callback(null, false);
      }

      next(err);
    });

	});
	
  io.sockets.on('session:reload', function(sid) {
    var clients = io.sockets.clients();

    clients.forEach(function(client) {
      if (client.handshake.session.id != sid) return;

      loadSession(sid, function(err, session) {
        if (err) {
          client.emit("error", "server error");
          client.disconnect();
          return;
        }

        if (!session) {
          client.emit("logout");
          client.disconnect();
          return;
        }

        client.handshake.session = session;
      });
        
    });

  });

  io.sockets.on('connection', function(socket) {
  	console.log("check2");
    var username = socket.handshake.user.get('username');
		console.log("check3");
    socket.broadcast.emit('join', username);

    socket.on('message', function(text, cb) {
      socket.broadcast.emit('message', username, text);
      cb && cb();
    });

    socket.on('disconnect', function() {
      socket.broadcast.emit('leave', username);
    });

  });

  return io;
};