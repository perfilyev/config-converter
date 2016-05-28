import {ext} from '../src/io';
import {assert} from 'chai';

describe('filtype', () => {
  it('should be yml', () => {
    assert.equal(ext('filename.yml'), 'yml');
  });

  it('should be yml, ignorcase', () => {
    assert.equal(ext('filename.YmL'), 'yml');
  });

  it('should be blank', () => {
    assert.equal(ext('filename'), '');
  });
});
