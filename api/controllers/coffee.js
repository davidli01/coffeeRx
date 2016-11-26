//require the json file in order for the controller to use it
var coffee = require("../data/coffee.json");

//callback for the get request
//prevent the client from waiting for the request
module.exports.coffeeGetAll = function(request, response) {
	console.log("GET the all coffee");
	response //response chain status and data
		.status(200)
		.json( coffee );
};

//callback for the get request
//prevent the client from waiting for the request
module.exports.coffeeGetOne = function(request, response) {
	//coffeeId is referenced in the url
	//save the coffeeId to a local variable
	//request obj.params obj / url parameter that holds the coffeeId
	var coffeeId = request.params.coffeeId;
	//saving the params as an index of the array
	var thisCoffee = coffee[coffeeId];
	console.log("GET coffeeId", coffeeId);
	response //response chain status and data
		.status(200)
		.json( thisCoffee );
};