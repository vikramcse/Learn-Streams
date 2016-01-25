var ReadStream = require('./lib/readStream.js');
var stream = new ReadStream();

// This is the Non-flowing Mode
// Where I have to ask for data
// stream.read()
console.log("Non-Flowing Mode......................");
stream.on('readable', function () {
	while ((line = stream.read()) !== null) {
		console.log('received ' + JSON.stringify(line));
	}
});

stream.on('end', function() {
	console.log('done');
});