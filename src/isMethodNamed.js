import {compose, prop, equals, has, curry, ifElse, F, any} from 'ramda';
import isMemberExpression from './isMemberExpression';

const isMethodNamed = (...args) => {

  const methodName = compose(prop('name'), prop('property'));
  const matchesArgs = (name) => any(equals(name))(args);

  return compose(
    ifElse(isMemberExpression,
      compose(matchesArgs, methodName),
      F
    ),
    prop('callee')
  )
}

export default curry(isMethodNamed)
