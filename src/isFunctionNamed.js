import {compose, prop, equals, has, ifElse, F, curry} from 'ramda';

const isFunction = (name) => {

  if (typeof name !== 'string'){
    throw new Error('first argument "name" must be  string')
  }

  return ifElse(
    has('callee'),
    compose(equals(name), prop('name'), prop('callee')),
    F
  )
}

export default curry(isFunction)
