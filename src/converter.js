import { getFormat, getEncoder, getDecoder } from './codec';

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
 * Check codec in converter by name.
 * @param {converter} converter.
 * @param {string} format - xml, json, etc.
 */
export const hasCodec = (converter, format) => converter('hasCodec')(format);


/**
 * Add codec to converter and return new converter instance.
 * @param {converter} converter.
 * @param {codec} codec.
 */
export const addCodec = (converter, codec) => {
  if (hasCodec(converter, getFormat(codec))) {
    throw new Error('Codec already added');
  }
  return converter('addCodec')(codec);
};

/**
 * Return codec from converter by format.
 * @param {converter} converter.
 * @param {string} format - xml, json, etc.
 */
export const getCodec = (converter, format) => {
  if (!hasCodec(converter, format)) {
    throw new Error('Unsupported codec');
  }
  return converter('getCodec')(format);
};

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
