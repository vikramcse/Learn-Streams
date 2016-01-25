var Writable = require('stream').Writable;
var util = require('util');

var WtitableStream = function () {
  Writable.call(this, {
    objectMode: true
  });
};

util.inherits(WtitableStream, Writable);

WtitableStream.prototype._write = function (chunk, encode, done) {
  console.log('write: ' + JSON.stringify(chunk));
  done();
};

module.exports = WtitableStream;
