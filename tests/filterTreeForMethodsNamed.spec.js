import {expect} from 'chai';
import {all, filter} from 'ramda';
import filterTreeForMethodsNamed from 'dist/filterTreeForMethodsNamed';
import isMethodNamed from 'dist/isMethodNamed';
import ASTJX from 'assets/ast-example';
import ASTJS from 'assets/ast-small-example';

describe('filterTreeForFunctionsNamed', () => {
  it('returns a collection of all functions in a tree named the same as the argument', () => {

    const getAllSayFunctions = filterTreeForMethodsNamed('say');
    const allSayFunctions = getAllSayFunctions(ASTJS.body);


    expect(all(isMethodNamed('say'))(allSayFunctions)).to.be.true;
    expect(allSayFunctions.length).to.be.equal(1);
  });
});
