import { assert } from 'chai';

import {mkdirSync, rmdirSync, readdirSync, unlinkSync} from 'fs';
import * as converter from '../src/index';

const convert = (source, destination, done) => {
  converter.convert(source, destination).then(() => done(), err => done(err));
};

const fixturesDir = `${__dirname}/data`;
const outDir = `${__dirname}/out`;

before(() => mkdirSync(outDir));

describe('json to', () => {
  const from = `${fixturesDir}/config.json`;

  it('xml', done => {
    const to = `${outDir}/json.to.xml`;
    assert.doesNotThrow(() => convert(from, to, done));
  });

  it('yaml', done => {
    const to = `${outDir}/json.to.yml`;
    assert.doesNotThrow(() => convert(from, to, done));
  });
});

describe('yaml to', () => {
  const from = `${fixturesDir}/config.yml`;
  it('xml', done => {
    const to = `${outDir}/yaml.to.xml`;
    assert.doesNotThrow(() => convert(from, to, done));
  });
  it('json', done => {
    const to = `${outDir}/yaml.to.json`;
    assert.doesNotThrow(() => convert(from, to, done));
  });
});

describe('xml to', () => {
  const from = `${fixturesDir}/config.xml`;
  it('json', done => {
    const to = `${outDir}/xml.to.json`;
    assert.doesNotThrow(() => convert(from, to, done));
  });
  it('yaml', done => {
    const to = `${outDir}/xml.to.yml`;
    assert.doesNotThrow(() => convert(from, to, done));
  });
});

after(() => {
  readdirSync(outDir).forEach(file => unlinkSync(`${outDir}/${file}`));
  rmdirSync(outDir)
});