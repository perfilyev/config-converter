const fs = require('fs');
const converter = require('./src/converter');
const extension = require('./lib/file-extension');
const validator = require('./lib/format-validator');

const type = (file) => validator(extension(file));

const convert = (from, to) => {
  const string = fs.readFileSync(from).toString();
  const out = (data) => {
    fs.writeFileSync(to, data);
    console.log('config save');
  };

  converter(type(from))(type(to))(out)(string);
};

module.exports = convert;
