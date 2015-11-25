'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _filterTreeForCallExpressions = require('./filterTreeForCallExpressions');

var _filterTreeForCallExpressions2 = _interopRequireDefault(_filterTreeForCallExpressions);

var _isMethodOrFunctionNamed = require('./isMethodOrFunctionNamed');

var _isMethodOrFunctionNamed2 = _interopRequireDefault(_isMethodOrFunctionNamed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filterTreeForMethodsAndFunctionsNamed = function filterTreeForMethodsAndFunctionsNamed(name) {
  return (0, _ramda.compose)((0, _ramda.filter)((0, _isMethodOrFunctionNamed2.default)(name)), _filterTreeForCallExpressions2.default);
};

exports.default = filterTreeForMethodsAndFunctionsNamed;