const xml2js = require('xml2js');

const parser = (string, cb) => xml2js.parseString(string, (err, data) => cb(data));
const stringify = (json, cb) => cb(new xml2js.Builder().buildObject(json).toString());

module.exports.parser = parser;
module.exports.stringify = stringify;
