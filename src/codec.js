/**
 * Represents a codec.
 * @constructor
 * @param {string} format - The name of the format: json, xml, yml, etc.
 * @param {function} decoder - The decoder function.
 * @param {function} encoder - The encoder function.
 */

export const make = (format, decoder, encoder) => (msg) => {
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
export const getFormat = (codec) => codec('format');

/**
 * Return codec encoder.
 * @param {codec} codec.
 */
export const getEncoder = (codec) => codec('encode');

/**
 * Return codec decoder.
 * @param {codec} codec.
 */
export const getDecoder = (codec) => codec('decode');
