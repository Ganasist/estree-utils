import {curry} from 'ramda'

const traverse = (visitor, object) => {
  var key, child;
  if (!Array.isArray(object)){
    visitor.call(null, object);
  }
  for (key in object) {
    if (object.hasOwnProperty(key)) {
      child = object[key];
      if (typeof child === 'object' &&
          child !== null &&
          !child.start &&
          typeof child[0] !== 'number' ) {
        traverse(visitor, child);
      }
    }
  }
}

export default curry(traverse);
