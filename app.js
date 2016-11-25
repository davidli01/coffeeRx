var express = require('express'); //require dependencies
var app = express(); //set reference to express dependency execution

app.set('port', 3000); //set express application variable port to 3000

var server = app.listen(app.get('port'), function() { //callback function
	var port = server.address().port;
	console.log('Listening to Port ' + port);	
}); //set listen to express variable, using get method