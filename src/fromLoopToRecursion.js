function joinElements(array, joinString) {
  function recurse(index, resultSoFar) {
    resultSoFar += array[index];

    if (index === array.length - 1) {
      return resultSoFar;
    } else {
      return recurse(index + 1, resultSoFar + joinString);
    }
  }

  return recurse(0, "");
}

function joinElements2(array, joinString) {
  let resultSoFar = "";

  for (let i = 0; i < array.length; i++) {
    resultSoFar += array[i];

    if (i < array.length - 1) {
      resultSoFar += joinString;
    }
  }

  return resultSoFar;
}

console.log(joinElements2(["s", "cr", "t cod", " :) :)"], "e"));
