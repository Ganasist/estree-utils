import {curry, compose, filter} from 'ramda';
import filterTreeForCallExpressions from './filterTreeForCallExpressions';
import isMethodNamed from './isMethodNamed';

const filterTreeForMethodsNamed = (...names) => compose(
  filter(isMethodNamed(...names)),
  filterTreeForCallExpressions
);

export default curry(filterTreeForMethodsNamed);
