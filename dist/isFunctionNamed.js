'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var isFunction = function isFunction(name) {

  if (typeof name !== 'string') {
    throw new Error('first argument "name" must be  string');
  }

  return (0, _ramda.ifElse)((0, _ramda.has)('callee'), (0, _ramda.compose)((0, _ramda.equals)(name), (0, _ramda.prop)('name'), (0, _ramda.prop)('callee')), _ramda.F);
};

exports.default = (0, _ramda.curry)(isFunction);