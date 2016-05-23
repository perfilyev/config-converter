const fs = require('fs');
const converter = require('./src/converter');
const filetype = require('./lib/filetype');

const convert = (from, to) => {
  const type = `${filetype(from)}->${filetype(to)}`;
  const source = fs.readFileSync(from).toString();
  const out = (data) => {
    fs.writeFileSync(to, data);
    console.log('config save');
  };

  converter(type)(source)(out);
};

module.exports = convert;
