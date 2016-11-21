var childNode = require("child_process");
console.log(1);

var newNode = childNode.spawn('node', ['_fibonacci.js'], {
	stdio : 'inherit'
});

console.log(2);
console.log(3);
console.log(4);

