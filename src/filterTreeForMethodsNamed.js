import {curry, compose, filter} from 'ramda';
import filterTreeForCallExpressions from './filterTreeForCallExpressions';
import isMethodNamed from './isMethodNamed';

const filterTreeForMethodsNamed = (name) => compose(
  filter(isMethodNamed(name)),
  filterTreeForCallExpressions
);

export default curry(filterTreeForMethodsNamed);
