import {curry, compose, filter} from 'ramda'
import filterTreeForCallExpressions from './filterTreeForCallExpressions';
import isFunctionNamed from './isFunctionNamed';

const filterTreeForFunctionsNamed = (name) => compose(
  filter(isFunctionNamed(name)),
  filterTreeForCallExpressions
);

export default curry(filterTreeForFunctionsNamed);
