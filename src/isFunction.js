import {compose, prop, equals} from 'ramda';

export default function isFunction(name, node) {
  return compose(equals(name), prop('name'), prop('callee'))(node)
}
