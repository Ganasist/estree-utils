import {compose, prop, equals} from 'ramda';

export default compose(equals('JSXExpressionContainer'), prop('type'));
