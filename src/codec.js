/**
 * Represents a codec.
 * @constructor
 * @param {string} format - The name of the format: json, xml, yml, etc.
 * @param {function} decoder - The decoder function.
 * @param {function} encoder - The encoder function.
 */

export const make = (format, decoder, encoder) => (msg) => {
  switch (msg) {
    case 'getFormat':
      return format;
    case 'getEncoder':
      return encoder;
    case 'getDecoder':
      return decoder;
    default:
      throw new Error(`You say ${msg} and codec say NO!`);
  }
};

/**
 * Return codec format.
 * @param {codec} codec.
 */
export const getFormat = (codec) => codec('getFormat');

/**
 * Return codec encoder.
 * @param {codec} codec.
 */
export const getEncoder = (codec) => codec('getEncoder');

/**
 * Return codec decoder.
 * @param {codec} codec.
 */
export const getDecoder = (codec) => codec('getDecoder');
