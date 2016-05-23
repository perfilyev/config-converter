const parser = (string, cb) => cb(JSON.parse(string));
const stringify = (json, cb) => cb(JSON.stringify(json, null, 2));

module.exports.parser = parser;
module.exports.stringify = stringify;
