import {expect} from 'chai';
import isJSXElement from 'dist/isJSXElement';

var node = {
  "type": "JSXElement",
  "openingElement": {
    "type": "JSXOpeningElement",
    "name": {
      "type": "JSXIdentifier",
      "name": "p"
    }
  }
}

describe('isJSXElement', () => {
  it('returns true if node is a JSX Element', () => {
    expect(isJSXElement(node)).to.be.true;
  });
});
