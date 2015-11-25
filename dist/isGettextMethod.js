'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _isMethod = require('./isMethod');

var _isMethod2 = _interopRequireDefault(_isMethod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _ramda.curry)(_isMethod2.default)('__');