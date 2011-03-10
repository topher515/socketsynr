var syncr = require('socketsyncr/server'),
	gs = require('gs/models'),
	sys = require('sys');
	

// Create SyncServer (with Node JS HTTP Server and SocketIO server)
syncServer = new syncr.SyncServer();
syncServer.listen(8030);

sys.puts("Server running at 'localhost:8030'...")




var world = new gs.World('My World');

critter1 = new gs.Critter('critter 1');
critter2 = new gs.Critter('foo critter');




world.add_critter(0,4,critter1);
world.add_critter(2,5,critter2);



syncServer.register(critter1);
syncServer.register(critter2);
syncServer.register(world);

