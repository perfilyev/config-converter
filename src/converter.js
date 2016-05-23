const parser = require('./parser');
const stringifier = require('./stringifier');

const convert = (from, to) => (out) => (string) => {
  parser(from)(string, stringifier(to)(out));
};

module.exports = from => to => convert(from, to);
