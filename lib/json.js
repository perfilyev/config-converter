const decode = string => new Promise(next => next(JSON.parse(string)));
const encode = json => new Promise(next => next(JSON.stringify(json, null, 2)));

module.exports.make = () => (msg) => {
  switch (msg) {
    case 'format':
      return 'json';
    case 'encode':
      return encode;
    case 'decode':
      return decode;
    default:
      throw new Error('Json codec say NO!');
  }
};
