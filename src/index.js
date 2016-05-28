import "babel-polyfill";

import { getExtension, readFile, writeFile } from './io';
import { make as makeCodec } from './codec';
import { make as makeConverter, convertData } from './converter';

import * as json from './codecs/json';
import * as yml from './codecs/yml';
import * as xml from './codecs/xml';

const jsonCodec = makeCodec('json', json.decode, json.encode);
const ymlCodec = makeCodec('yml', yml.decode, yml.encode);
const xmlCodec = makeCodec('xml', xml.decode, xml.encode);

const converter = makeConverter([jsonCodec, ymlCodec, xmlCodec]);

export const convert = async (source, destination) => {
  const sourceFormat = getExtension(source);
  const destinationFormat = getExtension(destination);

  const data = await readFile(source);
  const convertedData = await convertData(converter, sourceFormat, destinationFormat, data);
  await writeFile(destination, convertedData);
};
