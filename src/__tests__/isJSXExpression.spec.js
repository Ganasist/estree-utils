import {expect} from 'chai';
import isJSXExpression from '../isJSXExpression';

var node = {
  "type": "JSXExpressionContainer",
  "expression": {
    "type": "MemberExpression",
    "computed": false
  }
}

describe('isJSXExpression function', () => {
  it('returns true if node is a JSX Expression Container', () => {
    expect(isJSXExpression(node)).to.be.true;
  });
});
