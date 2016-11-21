require("./instantHello");
var goodbye = require("./Talk/goodbye");
var talk = require("./Talk"); //will look for a file talk.js, then folder talk with index.js
var question = require("./Talk/question");

talk.intro();
talk.hello("David");

var answer = question.ask("What is the meaning of life?");
console.log(answer);

goodbye();