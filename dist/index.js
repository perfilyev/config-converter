'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convert = undefined;

require('babel-polyfill');

var _io = require('./io');

var _codec = require('./codec');

var _converter = require('./converter');

var _json = require('./codecs/json');

var json = _interopRequireWildcard(_json);

var _yml = require('./codecs/yml');

var yml = _interopRequireWildcard(_yml);

var _xml = require('./codecs/xml');

var xml = _interopRequireWildcard(_xml);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var jsonCodec = (0, _codec.make)('json', json.decode, json.encode);
var ymlCodec = (0, _codec.make)('yml', yml.decode, yml.encode);
var xmlCodec = (0, _codec.make)('xml', xml.decode, xml.encode);

var converter = (0, _converter.make)([jsonCodec, ymlCodec, xmlCodec]);

var convert = exports.convert = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(source, destination) {
    var sourceFormat, destinationFormat, data, convertedData;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sourceFormat = (0, _io.getExtension)(source);
            destinationFormat = (0, _io.getExtension)(destination);
            _context.next = 4;
            return (0, _io.readFile)(source);

          case 4:
            data = _context.sent;
            _context.next = 7;
            return (0, _converter.convertData)(converter, sourceFormat, destinationFormat, data);

          case 7:
            convertedData = _context.sent;
            _context.next = 10;
            return (0, _io.writeFile)(destination, convertedData);

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function convert(_x, _x2) {
    return ref.apply(this, arguments);
  };
}();