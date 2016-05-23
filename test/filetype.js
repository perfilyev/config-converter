const filetype = require('../lib/filetype');
const assert = require('chai').assert;

describe('filtype', () => {
  it('should be yml', () => {
    assert.equal(filetype('filename.yml'), 'yml');
  });

  it('should be yml, ignorcase', () => {
    assert.equal(filetype('filename.YmL'), 'yml');
  });

  it('should be blank', () => {
    assert.equal(filetype('filename'), '');
  });
});
