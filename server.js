// Node modules
var sys = require("sys"),
	http = require("http"),
	io = require("socket.io"),
	gs = require("gs"),
	syncr = require('synchronizer');


// Create Node JS Server
server = http.createServer(function(request,response) {
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write("Hellow World!");
	response.end();
})
server.listen(8030);


var server_emitters = [];

// Create socket.io listener
var socket = io.listen(server);

// Setup event synchronizer
syncr.listen(socket)

socket.on('connection', function(client) {
	
	client_emitters[client.sessionId] = syncr.listen_client(client)
	server_emitters
	
	client.send(JSON.stringify({
		'server_message':"Welcome to the server"
	})
	client.send(JSON.stringify({
		'world':world,
	})
	
	// client_data[client.sessionId] = 
	
	
	client.on('message', function(msg) {
		
		
	})
	
	client.on('disconnect', function() {
		
	})
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