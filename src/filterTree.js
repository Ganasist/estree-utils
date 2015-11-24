import {curry} from 'ramda';
import mapTree from './mapTree';

const filterTree = (condition, tree) => {

  const filter = mapTree((node) => {
    if (condition(node)){
      return node;
    }
  });

  return filter(tree);
}

export default curry(filterTree)
