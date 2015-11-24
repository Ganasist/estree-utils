import {compose, prop, equals, has, curry, ifElse, F} from 'ramda';
import isMemberExpression from './isMemberExpression';

const isMethodNamed = (name) => compose(
  ifElse(isMemberExpression,
    compose(equals(name), prop('name'), prop('property')),
    F
  ),
  prop('callee')
)

export default curry(isMethodNamed)
