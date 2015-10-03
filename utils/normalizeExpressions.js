import {ifElse, identity, prop} from 'ramda';
import isCallExpression from './isCallExpression';

export default ifElse(isCallExpression, identity, prop('expression'));
