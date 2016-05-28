const xml2js = require('xml2js');

const decode = string => new Promise(next => xml2js.parseString(string, (err, data) => next(data)));
const encode = json => new Promise(next => next(new xml2js.Builder().buildObject(json).toString()));

module.exports.make = () => (msg) => {
    switch (msg) {
        case 'format':
            return 'xml';
            break;
        case 'encode':
            return encode;
            break;
        case 'decode':
            return decode;
        default:
            throw new Error('XML codec say NO!')
    }
}
