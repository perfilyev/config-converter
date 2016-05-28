'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getopt = exports.convert = undefined;

var _getopt = require('./src/getopt');

var getoptConverter = _interopRequireWildcard(_getopt);

var _io = require('./src/io');

var _codec = require('./src/codec');

var _converter = require('./src/converter');

var _json = require('./src/codecs/json');

var json = _interopRequireWildcard(_json);

var _yml = require('./src/codecs/yml');

var yml = _interopRequireWildcard(_yml);

var _xml = require('./src/codecs/xml');

var xml = _interopRequireWildcard(_xml);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var jsonCodec = (0, _codec.make)('json', json.decode, json.encode);
var ymlCodec = (0, _codec.make)('yml', yml.decode, yml.encode);
var xmlCodec = (0, _codec.make)('xml', xml.decode, xml.encode);

var converter = (0, _converter.make)([jsonCodec, ymlCodec, xmlCodec]);

var convert = exports.convert = function convert(source, destination) {
  var sourceFormat = (0, _io.ext)(source);
  var destinationFormat = (0, _io.ext)(destination);

  return (0, _io.input)(source).then(function (data) {
    return (0, _converter.decode)(converter, sourceFormat, data);
  }).then(function (data) {
    return (0, _converter.encode)(converter, destinationFormat, data);
  }).then(function (data) {
    return (0, _io.output)(destination, data);
  });
};

var getopt = exports.getopt = getoptConverter;