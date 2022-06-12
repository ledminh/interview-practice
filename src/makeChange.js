function makeChange(coins, amount) {
  coins.sort((a, b) => b - a);

  let results = [];
  let i = 0;

  while (amount > 0) {
    while (amount >= coins[i]) {
      amount -= coins[i];

      results.push(coins[i]);
    }

    i++;
  }

  return results;
}

console.log(makeChange([5, 10, 25], 25));

/*
If the result is negative a is sorted before b.
If the result is positive b is sorted before a.
*/
