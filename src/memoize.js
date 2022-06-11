const add = (a, b) => a + b;

const memoize = (cb) => {
  const cache = {};

  return (...args) => {
    if (args.toString() in cache) {
      console.log("Return from cache: ");
      return cache[args.toString()];
    } else {
      const result = cb(...args);
      cache[args.toString()] = result;
      console.log("Return from calculation: ");
      return result;
    }
  };
};

const mAdd = memoize(add);

console.log(mAdd(2, 3));
console.log(mAdd(2, 3));
console.log(mAdd(3, 6));
console.log(mAdd(3, 6));
