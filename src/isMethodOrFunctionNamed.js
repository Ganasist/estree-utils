import isMethodNamed from './isMethodNamed';
import isFunctionNamed from './isFunctionNamed';

const isMethodOrFunctionNamed = (...names) => (node) => (
  isMethodNamed(...names)(node) || isFunctionNamed(...names)(node)
)

export default isMethodOrFunctionNamed;
