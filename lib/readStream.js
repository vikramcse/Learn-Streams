var Readable = require('stream').Readable;
var util = require('util');
var data = require('../data.json');

var ReadStream = function () {
  Readable.call(this, {
    objectMode: true
  });

  this.data = data;
  this.currentIndex = 0;
};

util.inherits(ReadStream, Readable);

ReadStream.prototype._read = function () {
  if (this.currentIndex === this.data.length) {
    return this.push(null);
  }

  var data = this.data[this.currentIndex++];
  console.log('read: ' + JSON.stringify(data));
  this.push(data);
};

module.exports = ReadStream;
