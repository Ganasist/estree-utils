import {prop, equals, compose} form 'ramda';

export default compose(equals('ExpressionStatement'), prop('type'));
