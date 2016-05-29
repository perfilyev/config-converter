import * as fs from 'fs';
import { extname } from 'path';

export const getExtension = (name) => extname(name).substr(1).toLowerCase();
export const readFile = filename => new Promise(next => {
  fs.readFile(filename, (err, data) => {
    if (err) throw new Error('No such file');
    next(data);
  });
});
export const writeFile = (filename, data) => new Promise(next => {
  fs.writeFile(filename, data, err => {
    if (err) throw new Error('Write file error');
    next();
  });
});
