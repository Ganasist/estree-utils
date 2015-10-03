import {compose, map, reduce} from 'ramda';
import normalizeExpressions from './normalizeExpressions';
import accumulateCallExpressions from './accumulateCallExpressions';

const getCallExpressions = compose(map(normalizeExpressions), reduce(accumulateCallExpressions, []));

export default getCallExpressions

