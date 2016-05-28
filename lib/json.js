const decode = string => new Promise(next => next(JSON.parse(string)));
const encode = json => new Promise(next => next(JSON.stringify(json, null, 2)));

module.exports.encode = encode;
module.exports.decode = decode;
