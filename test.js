try {

	var blah = require('dfgdfh');
} catch(err) {
	require('sys').puts(JSON.stringify(err))
	throw err;
}

var syncr = require('syncserver'),
	gs = require('gs');
	

// Create SyncServer (with Node JS HTTP Server and SocketIO server)
syncServer = syncr.SyncServer();
syncServer.listen(8030);


sock = syncServer.socketServer;

sock.on('connection', function(client) {
	
	client.send(JSON.stringify({
		'server_message':"Welcome to the server"
	}));
	
	client.send(JSON.stringify({
		'world':world
	}));
	
});



var world = gs.World(0,'My World');


world.on('critter_set',function(x,y,critter) {
	socket.clients.send(JSON.stringify({
		'event':'critter_set',
		'x':x, 'y':y,
		'critter':critter
	}))
})

world.on('critter_add',function(x,y,critter) {
	socket.clients.send(JSON.stringify({
		'event':'critter_add',
		'x':x, 'y':y,
		'critter':critter
	}))
})


sys.puts("Server running at 'localhost:8030'...")