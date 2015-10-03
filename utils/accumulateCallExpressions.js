import isCallExpression from './isCallExpression';
import filterTree from './filterTree';

export default function accumulateCallExpressions(accum, node){
  return filterTree(isCallExpression, node).concat(accum);
}
