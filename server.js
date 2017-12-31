// WebSockets Server file
var WebSocketServer = require('ws').Server;
wss = new WebSocketServer({
	port: 8080
});
// listen if the connection is established
wss.on('connection', function connection(ws){
	ws.on('message', function incoming(message){
		dateTime = new Date();
		var hours = dateTime.getHours()
		var minutes = dateTime.getMinutes();
		var seconds = dateTime.getSeconds();
		console.log('received: %s at %s:%s:%s', message, hours, minutes, seconds);
		ws.send(message);
	});
	ws.send('Connected');
});