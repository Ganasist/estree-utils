import {prop, equals, compose} from 'ramda';

export default compose(equals('CallExpression'), prop('type'));
