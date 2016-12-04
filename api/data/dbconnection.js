var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://localhost:27017/coffeerx';

var _connection = null;

var open = function() {
	MongoClient.connect(dburl, function(error, db) {
		if (error) {
			console.log("Database connection Error");
			return;
		}
		_connection = db;
		console.log("Database connection open");
	});
	//set _connection
};

var get = function() {
	return _connection;
};

module.exports = {
	open : open,
	get : get
};