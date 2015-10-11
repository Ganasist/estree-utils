import {compose, prop, equals, identity, hasIn, ifElse, F} from 'ramda';

export default function isMethod(name, node) {
  return compose(
    ifElse(hasIn('property'),
      compose(equals(name), prop('name')),
      F
    ),
    prop('callee')
  )(node)
}
