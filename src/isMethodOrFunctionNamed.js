import {curry, or} from 'ramda';
import isMethodNamed from './isMethodNamed';
import isFunctionNamed from './isFunctionNamed';

const isMethodOrFunctionNamed = (name) => or(
  isMethodNamed(name),
  isFunctionNamed(name)
);

export default curry(isMethodOrFunctionNamed);
