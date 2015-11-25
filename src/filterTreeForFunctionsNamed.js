import {curry, compose, filter} from 'ramda'
import filterTreeForCallExpressions from './filterTreeForCallExpressions';
import isFunctionNamed from './isFunctionNamed';

const filterTreeForFunctionsNamed = (...names) => compose(
  filter(isFunctionNamed(...names)),
  filterTreeForCallExpressions
);

export default curry(filterTreeForFunctionsNamed);
