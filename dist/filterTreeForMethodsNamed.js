'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _filterTreeForCallExpressions = require('./filterTreeForCallExpressions');

var _filterTreeForCallExpressions2 = _interopRequireDefault(_filterTreeForCallExpressions);

var _isMethodNamed = require('./isMethodNamed');

var _isMethodNamed2 = _interopRequireDefault(_isMethodNamed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filterTreeForMethodsNamed = function filterTreeForMethodsNamed(name) {
  return (0, _ramda.compose)((0, _ramda.filter)((0, _isMethodNamed2.default)(name)), _filterTreeForCallExpressions2.default);
};

exports.default = (0, _ramda.curry)(filterTreeForMethodsNamed);