var ReadStream = require('./lib/readStream.js');
var stream = new ReadStream();

stream.on('data', function (line) {
  console.log('Received ' + JSON.stringify(line));
  console.log('pausing for 2 second');
  stream.pause();

  setTimeout(function () {
    console.log('resuming stream...');
    stream.resume();
  }, 2000);
});
