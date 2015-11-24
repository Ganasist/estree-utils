import {expect} from 'chai';
import traverse from '../traverse';
import AST from './sources/ast-mini-example';

describe('traverse', () => {
  it('visits every node with a semantic type', () => {
    let visited = 0
    traverse((node) => visited++, AST.body);
    expect(visited).to.be.equal(2);
  });

  it('applies an iterator to every visited node', () => {
    let accum = []
    traverse((node) => accum.push(node.type), AST.body);
    expect(accum).to.be.deep.equal(['VariableDeclaration', 'VariableDeclaration']);
  });
});
