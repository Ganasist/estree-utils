import {compose, filter, or} from 'ramda';
import filterTreeForCallExpressions from './filterTreeForCallExpressions';
import isMethodOrFunctionNamed from './isMethodOrFunctionNamed';

const filterTreeForMethodsAndFunctionsNamed = (...names) => compose(
  filter(isMethodOrFunctionNamed(...names)),
  filterTreeForCallExpressions
);

export default filterTreeForMethodsAndFunctionsNamed;
