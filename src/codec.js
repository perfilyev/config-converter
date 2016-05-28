/**
 * Represents a codec.
 * @constructor
 * @param {string} format - The name of the format: json, xml, yml, etc.
 * @param {function} decoder - The decoder function.
 * @param {function} encoder - The encoder function.
 */

const make = (format, decoder, encoder) => (msg) => {
  switch (msg) {
    case 'format':
      return format;
    case 'encode':
      return encoder;
    case 'decode':
      return decoder;
    default:
      throw new Error(`${format} codec say NO!`);
  }
};

/**
 * Return codec format.
 * @param {codec} codec.
 */
const getFormat = (codec) => codec('format');

/**
 * Return codec encoder.
 * @param {codec} codec.
 */
const getEncoder = (codec) => codec('encode');

/**
 * Return codec decoder.
 * @param {codec} codec.
 */
const getDecoder = (codec) => codec('decode');


module.exports.make = make;
module.exports.getFormat = getFormat;
module.exports.getEncoder = getEncoder;
module.exports.getDecoder = getDecoder;
