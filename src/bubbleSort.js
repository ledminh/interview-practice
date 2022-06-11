function bubbleSort(array) {
  if (array.length === 1) return array;

  let needSwap = true;

  while (needSwap) {
    needSwap = false;
    let lastI = array.length - 1;
    let i1 = 0,
      i2 = 1;

    while (i2 <= lastI) {
      if (array[i1] > array[i2]) {
        swap(array, i1, i2);
        needSwap = true;
      }
      i1++;
      i2++;
    }

    lastI--;
  }

  return array;
}

const swap = (arr, i1, i2) => {
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
};

console.log(bubbleSort([1, 5, 2, 9, 7, 20, -1, 17]));
