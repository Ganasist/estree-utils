import {curry} from 'ramda'
import traverse from './traverse'

const mapTree = (iterator, object) => {
  let collection = [];

  const map = traverse((node) => {
    let mapped = iterator(node);
    if (mapped !== null || mapped !== undefined) {
      collection.push(mapped);
    }
  });

  map(object);
  return collection;
}

export default curry(mapTree)
