function makeChange(coins, amount) {
  coins.sort((a, b) => b - a);

  const _makeChange = (cs, a, results) => {
    if (a === 0) return results;

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
      let r = _makeChange(cs, a - cs[i], [...results, cs[i]]);

      if (r && r.length < finalResultLength) {
        finalResult = r;
        finalResultLength = r.length;
      }
      i++;
    }

    return finalResult;
  };

  return _makeChange(coins, amount);
}

console.log("-----------------");
console.log(makeChange([10, 4, 3, 2, 11, 1], 12));

/*
If the result is negative a is sorted before b.
If the result is positive b is sorted before a.
*/
