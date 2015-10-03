import {curry} from 'ramda';
import isCallExpression from './isCallExpression';
import filterTree from './filterTree';

export defaultcurry(filterTree)(isCallExpression);
