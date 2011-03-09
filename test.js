var syncr = require('socketsyncr'),
	gs = require('gs'),
	sys = require('sys');
	

// Create SyncServer (with Node JS HTTP Server and SocketIO server)
syncServer = new syncr.SyncServer();
syncServer.listen(8030);


sock = syncServer.socketServer;




var world = new gs.World(0,'My World');

critter1 = new gs.Critter('critter 1');
critter2 = new gs.Critter('foo critter');

world.add_critter(0,4,critter1);
world.add_critter(2,5,critter2);

syncServer.register(critter1);
syncServer.register(critter2);

/*world.on('critter_set',function(x,y,critter) {
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
})*/


sys.puts("Server running at 'localhost:8030'...")