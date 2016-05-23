const xml = require('../lib/xml').parser;
const yaml = require('../lib/yaml').parser;
const json = require('../lib/json').parser;

module.exports = (type) => {
  switch (type) {
    case 'xml':
      return xml;
    case 'yaml':
      return yaml;
    case 'json':
      return json;
    default:
      throw new Error('Unsupported parser');
  }
};
