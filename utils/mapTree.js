import traverse from './traverse'

export default function mapTree(iterator, object){
  let collection = [];
  traverse(object, (node) => {
    let mapped = iterator(node);
    if (mapped) {
      collection.push(mapped);
    }
  });
  return collection;
}