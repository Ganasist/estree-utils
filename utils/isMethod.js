import {compose, prop, equals} from 'ramda';

export default function isMethod(name, node) {
  return compose(equals(name), prop('name'), prop('property'), prop('callee'))(node)
}
