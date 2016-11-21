require("./instantHello");
var goodbye = require("./Talk/goodbye");
var talk = require("./Talk"); //will look for a file talk.js, then folder talk with index.js

talk.intro();
talk.hello("David");

goodbye();