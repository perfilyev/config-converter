const xml = require('../lib/xml').stringify;
const yaml = require('../lib/yaml').stringify;
const json = require('../lib/json').stringify;

const stringify = (stringifier, out) => (source) => stringifier(source, out);

module.exports = (type) => {
  switch (type) {
    case 'xml':
      return (out) => stringify(xml, out);
    case 'yaml':
      return (out) => stringify(yaml, out);
    case 'json':
      return (out) => stringify(json, out);
    default:
      throw new Error('Unsupported stringifier');
  }
};
