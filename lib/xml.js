const xml2js = require('xml2js');

const decode = string => new Promise(next => xml2js.parseString(string, (err, data) => next(data)));
const encode = json => new Promise(next => next(new xml2js.Builder().buildObject(json).toString()));


module.exports.encode = encode;
module.exports.decode = decode;
