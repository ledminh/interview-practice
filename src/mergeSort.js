function mergeSort(array) {
  if (array.length === 1) return array;

  const middleI = Math.floor(array.length / 2);
  const lArrSorted = mergeSort(array.slice(0, middleI));
  const rArrSorted = mergeSort(array.slice(middleI));

  return merge(lArrSorted, rArrSorted);
}

function merge(arr1, arr2) {
  const resultArr = [];
  let i1 = 0,
    i2 = 0;

  while (i1 < arr1.length && i2 < arr2.length) {
    if (arr1[i1] <= arr2[i2]) {
      resultArr.push(arr1[i1]);
      i1++;
    } else {
      resultArr.push(arr2[i2]);
      i2++;
    }
  }

  if (i1 < arr1.length) {
    for (let i = i1; i < arr1.length; i++) {
      resultArr.push(arr1[i]);
    }
  } else {
    for (let i = i2; i < arr2.length; i++) {
      resultArr.push(arr2[i]);
    }
  }

  return resultArr;
}

console.log("------------------------");
console.log(mergeSort([4, 3, 2, 5, 11, 8, 9, 4, 20, -1]));
