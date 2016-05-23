const parser = require('./parser');
const stringifier = require('./stringifier');

const convert = (source, target) => (string) => (out) => {
  parser(source)(string, stringifier(target)(out));
};

module.exports = (type) => {
  switch (type) {
    case 'xml->json':
      return convert('xml', 'json');
    case 'xml->yml':
      return convert('xml', 'yaml');
    case 'yml->json':
      return convert('yaml', 'json');
    case 'yml->xml':
      return convert('yaml', 'xml');
    case 'json->xml':
      return convert('json', 'xml');
    case 'json->yml':
      return convert('json', 'yaml');
    default:
      throw new Error('Unsupported converting ' + type);
  }
};
