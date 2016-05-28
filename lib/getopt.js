const Getopt = require('node-getopt');
const getopt = new Getopt([
  ['O', 'out=ARG', 'destination.'],
  ['h', 'help', 'display this help'],
]);

getopt.setHelp(
  'Usage: config-converter [OPTIONs] path-to-file\n' +
  '\n' +
  '[[OPTIONS]]\n' +
  '\n' +
  'Installation: npm i -g config-converter\n' +
  'Respository:  https://github.com/perfilyev/config-converter'
);

module.exports = getopt;
