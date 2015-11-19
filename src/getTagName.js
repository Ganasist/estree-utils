import {compose, prop} from 'ramda';

export default compose(prop('name'), prop('name'), prop('openingElement'))