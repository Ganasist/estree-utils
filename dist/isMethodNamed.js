'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _isMemberExpression = require('./isMemberExpression');

var _isMemberExpression2 = _interopRequireDefault(_isMemberExpression);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isMethodNamed = function isMethodNamed(name) {
  return (0, _ramda.compose)((0, _ramda.ifElse)(_isMemberExpression2.default, (0, _ramda.compose)((0, _ramda.equals)(name), (0, _ramda.prop)('name'), (0, _ramda.prop)('property')), _ramda.F), (0, _ramda.prop)('callee'));
};

exports.default = (0, _ramda.curry)(isMethodNamed);