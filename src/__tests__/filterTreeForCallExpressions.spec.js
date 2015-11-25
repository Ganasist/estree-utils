import {expect} from 'chai';
import {all, concat} from 'ramda';
import filterTreeForCallExpressions from '../filterTreeForCallExpressions';
import filterTreeForFunctionsNamed from '../filterTreeForFunctionsNamed';
import isCallExpression from '../isCallExpression';
import ASTJSX from './sources/ast-example';
import ASTJS from './sources/ast-small-example';

describe('filterTreeForCallExpressions', () => {
  const output = concat(
    filterTreeForCallExpressions(ASTJS),
    filterTreeForCallExpressions(ASTJSX)
  );

  it('returns a collection of all call expressions', () => {
    expect(Array.isArray(output)).to.be.true;
    expect(all(isCallExpression)(output)).to.be.true;
  });

  it('returns all call expressions in a tree', () => {
    expect(output.length).to.be.equal(8)
  });
});
