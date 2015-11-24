import {expect} from 'chai';
import isFunctionNamed from '../isFunctionNamed';

var node = {
  "type": "CallExpression",
  "callee": {
    "type": "Identifier",
    "name": "add"
  }
}

describe('isFunctionNamed', () => {
  it('returns true if function node has the same name as the argument', () => {
    var isAddFunction = isFunctionNamed('add');
    expect(isAddFunction(node)).to.be.true;
  });

  it('return false if function not does not have the same name as argument', () => {
    var isMinusFunction = isFunctionNamed('minus');
    expect(isMinusFunction(node)).to.be.false;
  });

  it('throws an error if the argument is not a string', () => {
    expect(() => isFunctionNamed(this)).to.throw(Error)
  })
});
