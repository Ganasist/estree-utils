import {curry} from 'ramda'
import accumulateNodeType from './accumulateNodeType';
import isCallExpression from './isCallExpression';

export default curry(accumulateNodeType)(isCallExpression)
