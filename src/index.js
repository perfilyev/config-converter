import 'babel-polyfill';

import { getExtension, readFile, writeFile } from './io';
import { make as makeCodec } from './codec';
import { make as makeConverter, convertData } from './converter';

import { encode as jsonEncoder, decode as jsonDecoder } from './codecs/json';
import { encode as ymlEncoder, decode as ymlDecoder } from './codecs/yml';
import { encode as xmlEncoder, decode as xmlDecoder } from './codecs/xml';

const jsonCodec = makeCodec('json', jsonDecoder, jsonEncoder);
const ymlCodec = makeCodec('yml', ymlDecoder, ymlEncoder);
const xmlCodec = makeCodec('xml', xmlDecoder, xmlEncoder);

const converter = makeConverter([jsonCodec, ymlCodec, xmlCodec]);

export const convert = async (sourcePath, destinationPath) => {
  const sourceFormat = getExtension(sourcePath);
  const destinationFormat = getExtension(destinationPath);

  const sourceData = await readFile(sourcePath);
  const convertedData = await convertData(converter, sourceFormat, destinationFormat, sourceData);
  await writeFile(destinationPath, convertedData);
};
