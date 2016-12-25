var sessionStore = require('../libs/sessionStore');

exports.post = function(req, res, next) {
  var sid = req.session.id;

  var io = req.app.get('io');
  req.session.destroy(function(err) {
    
    var clients = io.sockets.clients().sockets;
    console.log("clients", clients);
    Object.keys(clients).forEach(function(id) {
    	console.log("id", id);
    	var client = clients[id];
    	
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
    if (err) return next(err);

    res.redirect('/');
  });

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
};