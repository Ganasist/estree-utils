import {curry, or} from 'ramda';
import isMethodNamed from './isMethodNamed';
import isFunctionNamed from './isFunctionNamed';

const isMethodOrFunctionNamed = (name, node) => (
  isMethodNamed(name)(node) || isFunctionNamed(name)(node)
)

export default curry(isMethodOrFunctionNamed);
