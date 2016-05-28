const fs = require('fs');

const input = filename => new Promise(next => fs.readFile(filename, (err, data) => next(data)));
const output = (filename, data) => new Promise(next => fs.writeFile(filename, data, () => next()));

module.exports.input = input;
module.exports.output = output;
