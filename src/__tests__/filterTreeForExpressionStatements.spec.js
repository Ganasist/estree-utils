import {expect} from 'chai';
import {all} from 'ramda';
import filterTreeforExpressionStatements from '../filterTreeforExpressionStatements';
import isJSXExpression from '../isJSXExpression';
import isExpressionStatement from '../isExpressionStatement';
import ASTJSX from './sources/ast-example';
import ASTJS from './sources/ast-small-example';

describe('filterTreeforExpressionStatements', () => {

  it('returns a collection of all JSX expression containers in an AST', () => {
    let output = filterTreeforExpressionStatements(ASTJSX);
    expect(all(isJSXExpression)(output)).to.be.true;
  });

  it('retuns a collection of all expression statements in an AST', () => {
    let output = filterTreeforExpressionStatements(ASTJS);
    expect(all(isExpressionStatement)(output)).to.be.true;
  });

});
