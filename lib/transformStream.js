var Transform = require('stream').Transform;
var inherits = require('util').inherits;

var TransformStream = function () {
  Transform.call(this, {
    objectMode: true
  });
};

inherits(TransformStream, Transform);

TransformStream.prototype._transform = function (chunk, encode, done) {
  console.log('transform before : ' + JSON.stringify(chunk));
  chunk.first_name = chunk.first_name.toUpperCase();
  console.log('transform after : ' + JSON.stringify(chunk));

  this.push(chunk);
  done();
};

module.exports = TransformStream;
