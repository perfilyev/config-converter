const assert = require('chai').assert;

const makeCodec = require('../src/codec').make;
const makeConverter = require('../src/converter').make;
const addCodec = require('../src/converter').addCodec;
const hasCodec = require('../src/converter').hasCodec;

const json = require('../lib/json');
const jsonCodec = makeCodec('json', json.decode, json.encode);

describe('converter', () => {
  it('add codec', () => {
    const emptyConverter = makeConverter([]);
    assert(!hasCodec(emptyConverter, 'json'));
    const jsonConverter = addCodec(emptyConverter, jsonCodec);
    assert(hasCodec(jsonConverter, 'json'));
  });
});
