import { assert } from 'chai';

import { make as makeCodec } from '../src/codec';
import { make as makeConverter, addCodec, hasCodec } from '../src/converter';
import * as json from '../src/codecs/json';

const jsonCodec = makeCodec('json', json.decode, json.encode);

describe('converter', () => {
  it('add codec', () => {
    const emptyConverter = makeConverter([]);
    assert(!hasCodec(emptyConverter, 'json'));
    const jsonConverter = addCodec(emptyConverter, jsonCodec);
    assert(hasCodec(jsonConverter, 'json'));
  });
  
  it('unsupported codec', () => {
    const emptyConverter = makeConverter([]);
    assert(!hasCodec(emptyConverter, 'json'));
  });
  
  
  
});
