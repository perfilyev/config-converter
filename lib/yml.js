const yaml = require('js-yaml');

const decode = string => new Promise(next => next(yaml.load(string)));
const encode = json => new Promise(next => next(yaml.dump(json)));

module.exports.make = () => (msg) => {
  switch (msg) {
    case 'format':
      return 'yml';
    case 'encode':
      return encode;
    case 'decode':
      return decode;
    default:
      throw new Error('YAML codec say NO!');
  }
};
