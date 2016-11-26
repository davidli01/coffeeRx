module.exports.coffeeGetAll = function(request, response) {
	console.log("GET the coffee");
	response
		.status(200)
		.json( {"coffee" : true} );
};