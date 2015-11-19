import {curry} from 'ramda';
import isCallExpression from './isCallExpression';
import filterTree from './filterTree';

export default curry(filterTree)(isCallExpression);
