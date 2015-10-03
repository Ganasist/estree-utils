import {compose, prop, head} from 'ramda';

export default compose(prop('value'), head);
