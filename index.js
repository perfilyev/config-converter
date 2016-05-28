const ext = require('./lib/filetype');
const makeCodec = require('./src/codec').make;
const makeConverter = require('./src/converter').make;
const encode = require('./src/converter').encode;
const decode = require('./src/converter').decode;
const io = require('./src/io');

const json = require('./lib/json');
const yml = require('./lib/yml');
const xml = require('./lib/xml');

const jsonCodec = makeCodec('json', json.decode, json.encode);
const ymlCodec = makeCodec('yml', yml.decode, yml.encode);
const xmlCodec = makeCodec('xml', xml.decode, xml.encode);

const converter = makeConverter([jsonCodec, ymlCodec, xmlCodec]);

const convert = (source, destination) => {
  const sourceFormat = ext(source);
  const destinationFormat = ext(destination);

  return io.input(source)
  .then(data => decode(converter, sourceFormat, data))
  .then(data => encode(converter, destinationFormat, data))
  .then(data => io.output(destination, data));
};

module.exports.convert = convert;
