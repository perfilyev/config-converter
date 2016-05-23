const yaml = require('js-yaml');

const parser = (string, cb) => cb(yaml.load(yaml));
const stringify = (json, cb) => cb(yaml.dump(json));

module.exports.parser = parser;
module.exports.stringify = stringify;
