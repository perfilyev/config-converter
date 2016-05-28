const getFormat = require('./codec').getFormat;
const getEncoder = require('./codec').getEncoder;
const getDecoder = require('./codec').getDecoder;

/**
 * Represents a converter.
 * @constructor
 * @param {array} codecs - The array of the codecs.
 */
const make = (codecs) => (msg) => {
  switch (msg) {
    case 'hasCodec':
      return (format) => codecs.some(codec => getFormat(codec) === format);
    case 'getCodec':
      return (format) => codecs.find(codec => getFormat(codec) === format);
    case 'addCodec':
      return (codec) => make(codecs.concat([codec]));
    default:
      throw new Error(`You say ${msg} and converter say NO!`);
  }
};

/**
 * Add codec to converter and return new converter instance.
 * @param {converter} converter.
 * @param {codec} codec.
 */
const addCodec = (converter, codec) => converter('addCodec')(codec);

/**
 * Check codec in converter by name.
 * @param {converter} converter.
 * @param {string} format - xml, json, etc.
 */
const hasCodec = (converter, format) => converter('hasCodec')(format);

/**
 * Encode data to string.
 * @param {converter} converter.
 * @param {string} format - xml, json, etc.
 * @param {string} data - data representation in json.
 */
const encode = (converter, format, data) => getEncoder(converter('getCodec')(format))(data);

/**
 * Decode data to json.
 * @param {converter} converter.
 * @param {string} format - xml, json, etc.
 * @param {string} data - raw data.
 */
const decode = (converter, format, data) => getDecoder(converter('getCodec')(format))(data);

module.exports.make = make;
module.exports.addCodec = addCodec;
module.exports.hasCodec = hasCodec;
module.exports.encode = encode;
module.exports.decode = decode;
