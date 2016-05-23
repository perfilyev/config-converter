const fs = require('fs');
const converter = require('../src/converter');
const extension = require('../lib/file-extension');
const validator = require('../lib/format-validator');

const type = (file) => validator(extension(file));

const convert = (from, to) => {
  const string = fs.readFileSync(from).toString();
  const out = (data) => {
    fs.writeFileSync(to, data);
    fs.unlink(to);
  };

  converter(type(from))(type(to))(out)(string);
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
