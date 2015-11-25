import {expect} from 'chai';
import {all} from 'ramda';
import filterTreeforExpressionStatements from 'src/filterTreeforExpressionStatements';
import isJSXExpression from 'src/isJSXExpression';
import isExpressionStatement from 'src/isExpressionStatement';
import ASTJSX from 'assets/ast-example';
import ASTJS from 'assets/ast-small-example';

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
