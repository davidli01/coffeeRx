var express = require('express'); //require dependencies
var app = express(); //set reference to express dependency execution
var path = require('path');

app.set('port', 3000); //set express application variable port to 3000

app.use(express.static(path.join(__dirname, 'public')));

app.get('/json', function(request, response){ //hhtp method / get method
	console.log("GET the json");
	response.status(200).json( {"jsonData" : true} );//send json with 200 method
});

app.get('/file', function(request, response){ //hhtp method / get method
	console.log("GET the file");
	response.status(200).sendFile(path.join(__dirname, 'app.js'));
	//sends a file, specify path current directory file name
});

var server = app.listen(app.get('port'), function() { //callback function
	var port = server.address().port;
	console.log('Listening to Port ' + port);	
}); //set listen to express variable, using get method 