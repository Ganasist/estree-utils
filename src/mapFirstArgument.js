import {compose, map} from 'ramda';
import getFirstValue from './getFirstValue';
import getArguments from './getArguments';

export default compose(map(getFirstValue), getArguments);
