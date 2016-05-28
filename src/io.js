import { readFile, writeFile } from 'fs';
import { extname } from 'path';

export const ext = (name) => extname(name).substr(1).toLowerCase();
export const input = filename => new Promise(next => readFile(filename, (err, data) => next(data)));
export const output = (filename, data) => new Promise(next => writeFile(filename, data, () => next()));
