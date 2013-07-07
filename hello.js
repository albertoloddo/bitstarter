var fs = require('fs');
var buffer = new Buffer(32);

var read = fs.readFileSync('index.html', 'utf8');
var read2 = fs.readFileSync('index.html', buffer.toString('utf-8'));
console.log(read);	
console.log(read2);	


