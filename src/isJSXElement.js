import {prop, equals, compose} from 'ramda';

export default compose(equals('JSXElement'), prop('type'));