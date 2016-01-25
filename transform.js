var ReadStream = require('./lib/readStream.js');
var WriteStream = require('./lib/writeStream.js');
var TransformStream = require('./lib/transformStream.js');

var rs = new ReadStream();
var ts = new TransformStream();
var ws = new WriteStream();

rs.pipe(ts).pipe(ws);
