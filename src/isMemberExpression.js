import {compose, equals, prop} from 'ramda';

export default compose(
  equals('MemberExpression'),
  prop('type')
)
