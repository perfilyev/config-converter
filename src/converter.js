import { getFormat, getEncoder, getDecoder } from './codec';

/**
 * Represents a converter.
 * @constructor
 * @param {array} codecs - The array of the codecs.
 */
export const make = codecs => f => f(codecs);


/**
 * Check codec in converter by name.
 * @param {converter} converter.
 * @param {string} format - xml, json, etc.
 */
export const hasCodec = (converter, format) => converter(codecs => codecs.some(codec => getFormat(codec) === format));


/**
 * Add codec to converter and return new converter instance.
 * @param {converter} converter.
 * @param {codec} codec.
 */
export const addCodec = (converter, codec) => converter(codecs => {
  if (hasCodec(converter, getFormat(codec))) {
    throw new Error(`Codec ${getFormat(codec)} already exist in converter`);
  }
  return make(codecs.concat([codec]));
});

/**
 * Return codec from converter by format.
 * @param {converter} converter.
 * @param {string} format - xml, json, etc.
 */
export const getCodec = (converter, format) => converter(codecs => {
  if (!hasCodec(converter, format)) {
    throw new Error('Unsupported codec');
  }
  return codecs.find(codec => getFormat(codec) === format);
});

/**
 * Return converted data.
 * @param {converter} converter.
 * @param {string} sourceFormat - xml, json, etc.
 * @param {string} destinationFormat - xml, json, etc.
 * @param {string} data - raw data in sourceFormat.
 */
export const convertData = async (converter, sourceFormat, destinationFormat, data) => {
  const sourceCodec = getCodec(converter, sourceFormat);
  const destinationCodec = getCodec(converter, destinationFormat);

  const decoder = getDecoder(sourceCodec);
  const encoder = getEncoder(destinationCodec);

  const json = await decoder(data);
  return await encoder(json);
};
