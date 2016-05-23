const fs = require('fs');
const converter = require('../src/converter');
const filetype = require('../lib/filetype');
const assert = require('chai').assert;

const convert = (from, to) => {
  const type = `${filetype(from)}->${filetype(to)}`;
  const source = fs.readFileSync(from).toString();
  const out = (data) => fs.writeFileSync(to, data);

  converter(type)(source)(out);
};

describe('json', () => {
  const from = `${__dirname}/data/config.json`;
  it('->xml', () => {
    const to = `${__dirname}/data/json.to.xml`;
    convert(from, to);
  });

  it('->yaml', () => {
    const to = `${__dirname}/data/json.to.yml`;
    convert(from, to);
  });
});

describe('yaml', () => {
  const from = `${__dirname}/data/config.yml`;
  it('->xml', () => {
    const to = `${__dirname}/data/yaml.to.xml`;
    convert(from, to);
  });
  it('->json', () => {
    const to = `${__dirname}/data/yaml.to.json`;
    convert(from, to);
  });
});

describe('xml', () => {
  const from = `${__dirname}/data/config.xml`;
  it('->json', () => {
    const to = `${__dirname}/data/xml.to.json`;
    convert(from, to);
  });
  it('->yaml', () => {
    const to = `${__dirname}/data/xml.to.yml`;
    convert(from, to);
  });
});
