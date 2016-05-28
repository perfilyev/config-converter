export const decode = string => new Promise(next => next(JSON.parse(string)));
export const encode = json => new Promise(next => next(JSON.stringify(json, null, 2)));
