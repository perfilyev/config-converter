import { parseString, Builder } from 'xml2js';

export const decode = string => new Promise(next => parseString(string, (err, data) => next(data)));
export const encode = json => new Promise(next => next(new Builder().buildObject(json).toString()));
