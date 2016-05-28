import * as getoptConverter from './src/getopt';
import {ext, input, output} from './src/io';
import {make as makeCodec} from './src/codec';
import {make as makeConverter, encode, decode} from './src/converter';

import * as json from './src/codecs/json';
import * as yml from './src/codecs/yml';
import * as xml from './src/codecs/xml';

const jsonCodec = makeCodec('json', json.decode, json.encode);
const ymlCodec = makeCodec('yml', yml.decode, yml.encode);
const xmlCodec = makeCodec('xml', xml.decode, xml.encode);

const converter = makeConverter([jsonCodec, ymlCodec, xmlCodec]);

export const convert = (source, destination) => {
  const sourceFormat = ext(source);
  const destinationFormat = ext(destination);

  return input(source)
  .then(data => decode(converter, sourceFormat, data))
  .then(data => encode(converter, destinationFormat, data))
  .then(data => output(destination, data));
};

export const getopt = getoptConverter;