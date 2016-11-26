var express = require('express'); //require dependencies
var app = express(); //set reference to express dependency execution
var path = require('path');

var routes = require('./api/routes');

app.set('port', 3000); //set express application variable port to 3000

app.use(function(request, response, next) {
	console.log(request.method, request.url);//method(post/get)
	next(); //next pushes the request to the next statement
});

//define path __dirname is current directory, public folder
app.use(express.static(path.join(__dirname, 'public')));

//use routes
//retrieve routes from routes folder
app.use('/', routes);

var server = app.listen(app.get('port'), function() { //callback function
	var port = server.address().port;
	console.log('Listening to Port ' + port);	
}); //set listen to express variable, using get method 