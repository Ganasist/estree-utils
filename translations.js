import AST from './esprima-ast-output';

import {filter, map, reduce, uniq} from 'ramda';

import {

  getCallExpressions,
  isGettextFunction,
  getFirstArgument,
  accumulateJSXExpressions,
  getTagName

} from './utils';

const jsxExpressions = reduce(accumulateJSXExpressions, [], AST);
const jsxTags = map(getTagName)(jsxExpressions);

const callExpressions = getCallExpressions(AST);
const gettextFunctions = filter(isGettextFunction, callExpressions);
const translations = uniq(getFirstArgument(gettextFunctions));

console.log('these are the gettext translations');
console.log(translations);
console.log('\n')
console.log('these are the JSX tags');
console.log(jsxTags);
