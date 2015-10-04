import AST from '../sources/esprima-ast-output';

import {map, reduce} from 'ramda';
import {accumulateJSXExpressions, getTagName} from '../utils';

const jsxExpressions = reduce(accumulateJSXExpressions, [], AST);
const jsxTags = map(getTagName)(jsxExpressions);

console.log('these are the JSX tags');
console.log(jsxTags);
