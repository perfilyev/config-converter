import * as getoptConverter from './getopt';
import {ext, input, output} from './io';
import {make as makeCodec} from './codec';
import {make as makeConverter, encode, decode} from './converter';

import * as json from './codecs/json';
import * as yml from './codecs/yml';
import * as xml from './codecs/xml';

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