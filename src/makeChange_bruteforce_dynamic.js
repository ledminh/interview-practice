function makeChange(coins, amount) {
  coins.sort((a, b) => b - a);

  const cache = {};

  let count = 0;

  const _makeChange = (cs, a, results) => {
    if (a === 0) return results;

    if (cache[cs.toString() + a.toString()]) {
      return cache[cs.toString() + a.toString()];
    }

    if (!results) {
      results = [];
    }

    let i = 0;

    while (a - cs[i] < 0) {
      i++;
    }

    let finalResult = null,
      finalResultLength = 100000;

    while (i < cs.length) {
      count++;
      let r = _makeChange(cs, a - cs[i], [...results, cs[i]]);

      if (r && r.length < finalResultLength) {
        finalResult = r;
        finalResultLength = r.length;
      }
      i++;
    }

    cache[cs.toString() + a.toString()] = finalResult;
    return finalResult;
  };

  const arrResult = _makeChange(coins, amount);
  console.log(count);

  return arrResult;
}

console.log("-----------------");
console.log(makeChange([10, 4, 3, 2, 11, 1], 22));
