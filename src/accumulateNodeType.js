import filterTree from './filterTree';

export default (condition, accum, node) => {
  return filterTree(condition, node).concat(accum);
}
