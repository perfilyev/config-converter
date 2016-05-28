<<<<<<< HEAD
const converter = require('../index');

const convert = (source, destination, done) => converter.convert(source, destination).then(() => done(), err => console.log('error', err));

describe('json to', () => {
=======
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
>>>>>>> eb5ae626e3821af7e0116a8983ebd150ace1ad2b
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