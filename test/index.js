import * as converter from '../src/index';

const convert = (source, destination, done) => converter.convert(source, destination).then(() => done(), err => console.log('error', err));

describe('json to', () => {
  const from = `${__dirname}/data/config.json`;

  it('xml', done => {
    const to = `${__dirname}/data/json.to.xml`;
    convert(from, to, done);
  });

  it('yaml', done => {
    const to = `${__dirname}/data/json.to.yml`;
    convert(from, to, done);
  });
});

describe('yaml to', () => {
  const from = `${__dirname}/data/config.yml`;
  it('xml', done => {
    const to = `${__dirname}/data/yaml.to.xml`;
    convert(from, to, done);
  });
  it('json', done => {
    const to = `${__dirname}/data/yaml.to.json`;
    convert(from, to, done);
  });
});

describe('xml to', () => {
  const from = `${__dirname}/data/config.xml`;
  it('json', done => {
    const to = `${__dirname}/data/xml.to.json`;
    convert(from, to, done);
  });
  it('yaml', done => {
    const to = `${__dirname}/data/xml.to.yml`;
    convert(from, to, done);
  });
});
