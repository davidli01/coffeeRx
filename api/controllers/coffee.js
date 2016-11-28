//require the json file in order for the controller to use it
var coffee = require("../data/coffee.json");

//callback for the get request
//prevent the client from waiting for the request
module.exports.coffeeGetAll = function(request, response) {
	console.log("GET the all coffee");
	//query string (localhost:3000/coffee?offset=2&count=2)
	console.log(request.query);
	//create offset and count values
	var offset = 0; //start
	var count = 5; //end
	//if request.query exist and request.query.offset exist
	if(request.query && request.query.offset) {
		//parse offset and retrieve number instead of string
		offset = parseInt(request.query.offset, 10);
	}
	//if request.query exist and request.query.count exist
	if(request.query && request.query.count) {
		//parse offset and retrieve number instead of string
		count = parseInt(request.query.count, 10);
	}
	//slice start point, startpoint + endpoint
	var returnData = coffee.slice(offset, offset+count);

	response //response chain status and data
		.status(200)
		.json( returnData );
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

module.exports.coffeeAddOne = function(request, response) {
	console.log("POST new coffee");
	console.log(request.body); //request.body to retreive Post fields
	response //response chain status and data
		.status(200)
		.json(request.body);
};


//query string often use for forms get method, 
//get all form info and send to server as query string in url
//when posting, form fields are added to the body of the request