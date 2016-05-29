import { parseString, Builder } from 'xml2js';

export const decode = string => new Promise((next, reject) => {
  parseString(string, (err, data) => (err ? reject(err) : next(data)));
});
export const encode = json => new Promise(next => next(new Builder().buildObject(json).toString()));
