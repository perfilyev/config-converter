/**
 * Represents a codec.
 * @constructor
 * @param {string} format - The name of the format: json, xml, yml, etc.
 * @param {function} decoder - The decoder function.
 * @param {function} encoder - The encoder function.
 */

export const make = (format, decoder, encoder) => (f) => f(format, decoder, encoder);

/**
 * Return codec format.
 * @param {codec} codec.
 */
export const getFormat = codec => codec((format, decoder, encoder) => format);

/**
 * Return codec encoder.
 * @param {codec} codec.
 */
export const getEncoder = codec => codec((format, decoder, encoder) => encoder);

/**
 * Return codec decoder.
 * @param {codec} codec.
 */
export const getDecoder = codec => codec((format, decoder, encoder) => decoder);
