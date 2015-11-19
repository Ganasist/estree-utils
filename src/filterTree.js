import mapTree from './mapTree';

export default function filterTree(condition, object){
  return mapTree((node) => {
    if (condition(node)){
      return node;
    }
  }, object);
}
