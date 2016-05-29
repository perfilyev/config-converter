/* eslint max-len: ["error", 120]*/

import { assert } from 'chai';

import { make as makeCodec } from '../src/codec';
import { make as makeConverter, addCodec, hasCodec, getCodec } from '../src/converter';
import * as json from '../src/codecs/json';

const jsonCodec = makeCodec('json', json.decode, json.encode);

describe('converter', () => {
  it('add codec', () => {
    const emptyConverter = makeConverter([]);
    assert(!hasCodec(emptyConverter, 'json'), 'should be empty');
    const jsonConverter = addCodec(emptyConverter, jsonCodec);
    assert(hasCodec(jsonConverter, 'json'), 'has codec');
  });

  it('codec duplicate', () => {
    const emptyConverter = makeConverter([]);
    const jsonConverter = addCodec(emptyConverter, jsonCodec);
    assert.throws(() => addCodec(jsonConverter, jsonCodec), 'Codec json already exist in converter');
  });

  it('unsupported codec', () => {
    const emptyConverter = makeConverter([]);
    assert.throws(() => getCodec(emptyConverter, 'json'), 'Unsupported codec');
  });

  it('unsupported converter call', () => {
    const emptyConverter = makeConverter([]);
    assert.throws(() => emptyConverter('surprise me'), 'You say surprise me and converter say NO!');
  });

  it('unsupported codec call', () => {
    const emptyCodec = makeCodec(null, null, null);
    assert.throws(() => emptyCodec('surprise me'), 'You say surprise me and codec say NO!');
  });
});
