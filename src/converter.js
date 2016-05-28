import {getFormat, getEncoder, getDecoder} from './codec';

/**
 * Represents a converter.
 * @constructor
 * @param {array} codecs - The array of the codecs.
 */
export const make = (codecs) => (msg) => {
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
export const addCodec = (converter, codec) => converter('addCodec')(codec);

/**
 * Check codec in converter by name.
 * @param {converter} converter.
 * @param {string} format - xml, json, etc.
 */
export const hasCodec = (converter, format) => converter('hasCodec')(format);

/**
 * Encode data to string.
 * @param {converter} converter.
 * @param {string} format - xml, json, etc.
 * @param {string} data - data representation in json.
 */
export const encode = (converter, format, data) => getEncoder(converter('getCodec')(format))(data);

/**
 * Decode data to json.
 * @param {converter} converter.
 * @param {string} format - xml, json, etc.
 * @param {string} data - raw data.
 */
export const decode = (converter, format, data) => getDecoder(converter('getCodec')(format))(data);
