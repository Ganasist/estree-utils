import AST from './esprima-ast-output';
import {filter, map, compose, prop, head} from 'ramda';
import getCallExpressions from './utils/getCallExpressions';
import isGettextFunction from './utils/isGettextFunction';

const getArguments = map(prop('arguments'));
const getFirstValue = compose(prop('value'), head);
const getFirstArgument = compose(map(getFirstValue),getArguments);

const callExpressions = getCallExpressions(AST);
const gettextFunctions = filter(isGettextFunction, callExpressions);
const translations = getFirstArgument(gettextFunctions)

console.log(translations)
