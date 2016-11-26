var express = require("express");
var router = express.Router();
//require the controller
var controller = require("../controllers/coffee.js");

router
	.route('/coffee') //set the route
	.get(controller.coffeeGetAll); //get controller and its function

router
	.route('/coffee/:coffeeId') //set the route
	.get(controller.coffeeGetOne); //get controller and its function

module.exports = router;

//must be named index.js as other file names will promote issues