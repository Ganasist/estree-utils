import traverse from './traverse'

export default function mapTree(iterator, object){
  console.log(iterator, object)
  let collection = [];
  traverse((node) => {
    let mapped = iterator(node);
    if (mapped) {
      collection.push(mapped);
    }
  }, object);
  return collection;
}
