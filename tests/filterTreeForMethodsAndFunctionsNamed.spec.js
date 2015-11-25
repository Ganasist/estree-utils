import {expect} from 'chai';
import {all, filter} from 'ramda';
import filterTreeForMethodsAndFunctionsNamed from 'dist/filterTreeForMethodsAndFunctionsNamed';
import isMethodOrFunctionNamed from 'dist/isMethodOrFunctionNamed';
import ASTJX from 'assets/ast-example';
import ASTJS from 'assets/ast-small-example';

describe('filterTreeForMethodsAndFunctionsNamed', () => {
  it('returns a collection of all methods and functions in a tree named the same as the argument', () => {

    const getAllGettext = filterTreeForMethodsAndFunctionsNamed('__');
    const allGettext = getAllGettext(ASTJX.body);

    const getAllHello = filterTreeForMethodsAndFunctionsNamed('hello');
    const allHello = getAllHello(ASTJS.body);

    expect(all(isMethodOrFunctionNamed('__'))(allGettext)).to.be.true;
    expect(allGettext.length).to.be.equal(2);
    expect(all(isMethodOrFunctionNamed('hello'))(allHello)).to.be.true;
    expect(allHello.length).to.be.equal(1);
  });
});
