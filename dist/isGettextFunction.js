'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _isFunctionNamed = require('./isFunctionNamed');

var _isFunctionNamed2 = _interopRequireDefault(_isFunctionNamed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _ramda.curry)(_isFunctionNamed2.default)('__');