'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _getFirstValue = require('./getFirstValue');

var _getFirstValue2 = _interopRequireDefault(_getFirstValue);

var _getArguments = require('./getArguments');

var _getArguments2 = _interopRequireDefault(_getArguments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _ramda.compose)((0, _ramda.map)(_getFirstValue2.default), _getArguments2.default);