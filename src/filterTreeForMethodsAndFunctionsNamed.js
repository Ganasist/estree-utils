import {compose, filter, or} from 'ramda';
import filterTreeForCallExpressions from './filterTreeForCallExpressions';
import isMethodOrFunctionNamed from './isMethodOrFunctionNamed';

const filterTreeForMethodsAndFunctionsNamed = (name) => compose(
  filter(isMethodOrFunctionNamed(name)),
  filterTreeForCallExpressions
);

export default filterTreeForMethodsAndFunctionsNamed;
