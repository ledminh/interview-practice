const uniqSort = function (arr) {
  const breadcrumbs = {};

  let i = 0;

  while (i < arr.length) {
    const elem = arr[i];

    if (breadcrumbs[elem]) {
      arr.splice(i, 1);
    } else {
      breadcrumbs[elem] = true;
      i++;
    }
  }

  return arr.sort((a, b) => a - b);
};

console.log(uniqSort([5, 4, 2, 2, 3, 4, 5, 5, 2, 2, 2, 6]));
