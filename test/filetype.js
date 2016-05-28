const extension = require('../lib/filetype');
const assert = require('chai').assert;

describe('filtype', () => {
  it('should be yml', () => {
    assert.equal(extension('filename.yml'), 'yml');
  });

  it('should be yml, ignorcase', () => {
    assert.equal(extension('filename.YmL'), 'yml');
  });

  it('should be blank', () => {
    assert.equal(extension('filename'), '');
  });
});
