const decode = string => new Promise(next => next(JSON.parse(string)));
const encode = json => new Promise(next => next(JSON.stringify(json, null, 2)));

module.exports.make = () => (msg) => {
    switch (msg) {
        case 'format':
            return 'json';
            break;
        case 'encode':
            return encode;
            break;
        case 'decode':
            return decode;
        default:
            throw new Error('Json codec say NO!')
    }
}
