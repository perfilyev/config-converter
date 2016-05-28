import { getExtension } from '../src/io';
import { assert } from 'chai';

describe('filtype', () => {
  it('should be yml', () => {
    assert.equal(getExtension('filename.yml'), 'yml');
  });

  it('should be yml, ignorcase', () => {
    assert.equal(getExtension('filename.YmL'), 'yml');
  });

  it('should be blank', () => {
    assert.equal(getExtension('filename'), '');
  });
});
