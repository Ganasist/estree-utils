import {or} from 'ramda';
import filterTree from './filterTree';
import isExpressionStatement from './isExpressionStatement';
import isJSXExpression from './isJSXExpression';

export default filterTree((node) => (
  or(
    isExpressionStatement(node),
    isJSXExpression(node)
  )
))
