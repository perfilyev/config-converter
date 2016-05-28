import { load, dump } from 'js-yaml';

export const decode = string => new Promise(next => next(load(string)));
export const encode = json => new Promise(next => next(dump(json)));
