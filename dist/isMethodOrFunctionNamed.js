'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _isMethodNamed = require('./isMethodNamed');

var _isMethodNamed2 = _interopRequireDefault(_isMethodNamed);

var _isFunctionNamed = require('./isFunctionNamed');

var _isFunctionNamed2 = _interopRequireDefault(_isFunctionNamed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isMethodOrFunctionNamed = function isMethodOrFunctionNamed(name, node) {
  return (0, _isMethodNamed2.default)(name)(node) || (0, _isFunctionNamed2.default)(name)(node);
};

exports.default = (0, _ramda.curry)(isMethodOrFunctionNamed);