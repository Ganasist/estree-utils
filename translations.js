import AST from './esprima-ast-output';

import {filter, map, compose, prop, head} from 'ramda';

import getCallExpressions from './utils/getCallExpressions';
import isGettextFunction from './utils/isGettextFunction';
import getFirstArgument from './utils/getFirstArgument';

const callExpressions = getCallExpressions(AST);
const gettextFunctions = filter(isGettextFunction, callExpressions);
const translations = getFirstArgument(gettextFunctions)

console.log(translations)
