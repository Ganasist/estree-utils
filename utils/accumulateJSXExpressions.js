import {curry} from 'ramda'
import accumulateNodeType from './accumulateNodeType';
import isJSXElement from './isJSXElement';

export default curry(accumulateNodeType)(isJSXElement)