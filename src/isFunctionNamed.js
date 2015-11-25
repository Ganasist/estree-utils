import {compose, prop, equals, has, ifElse, F, curry, concat, any, __} from 'ramda';

const isFunction = (...args) => {

  const notString = (name) => typeof name !== 'string'
  const functionName = compose(prop('name'), prop('callee'));
  const matchesArgs = (name) => any(equals(name))(args);

  if (any(notString)(args)){
    throw new Error('arguments must be strings')
  }

  return ifElse(
    has('callee'),
    compose(matchesArgs, functionName),
    F
  )
}

export default curry(isFunction)
