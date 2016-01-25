var ReadStream = require('./lib/readStream.js');
var stream = new ReadStream();

// This is the Flowing Mode
// consumer doesn’t have to ask for the data,
// it’s just fed the stream’s data until the stream ends
console.log("Flowing Mode......................");
stream.on('data', function (line) {
	console.log('received ' + JSON.stringify(line));
});

stream.on('end', function() {
	console.log('done');
});