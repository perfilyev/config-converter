const ext = require('./lib/filetype');
const makeJSON = require('./lib/json').make;
const makeYAML = require('./lib/yml').make;
const makeXML = require('./lib/xml').make;
const makeCodec = require('./src/codec').make;
const io = require('./src/io');

const codec = makeCodec([makeJSON(), makeYAML(), makeXML()]);

const convert = (source, destination) => {
  const sourceFormat = ext(source);
  const destinationFormat = ext(destination);

  return io.input(source)
  .then(data => codec('decode', sourceFormat, data))
  .then(json => codec('encode', destinationFormat, json))
  .then(data => io.output(destination, data));
};

module.exports.convert = convert;
