import AST from '../sources/esprima-ast-output';

import {filter, uniq} from 'ramda';
import {getCallExpressions, isGettextFunction, getFirstArgument} from '../utils';

const callExpressions = getCallExpressions(AST);
const gettextFunctions = filter(isGettextFunction, callExpressions);
const translations = uniq(getFirstArgument(gettextFunctions));

console.log('these are the gettext translations');
console.log(translations);
