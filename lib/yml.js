const yaml = require('js-yaml');

const decode = string => new Promise(next => next(yaml.load(string)));
const encode = json => new Promise(next => next(yaml.dump(json)));


module.exports.encode = encode;
module.exports.decode = decode;
