var express = require("express");
var router = express.Router();

var controller = require("../controllers/coffee.js");

router
	.route('/coffee') //set the route
	.get(controller.coffeeGetAll);

module.exports = router;