function increasingArray(arraySize, arrayOfIntegers) {
  if (arraySize === 1) {
    return 0;
  }

  let counter = 0;
  let arrayClone = [...arrayOfIntegers];

  for (let i = 1; i < arraySize; i++) {
    console.log(
      `current number and previous number,${arrayClone[i]}, ${
        arrayClone[i - 1]
      }`
    );
    if (arrayClone[i] < arrayClone[i - 1]) {
      counter += arrayClone[i - 1] - arrayClone[i];
      arrayClone[i] = arrayClone[i - 1];
    }
  }
  return counter;
}

module.exports = increasingArray;

//array of n integers, modify the array so that it is increasing or at least the same as the previous integer/element,

//how many increments to get the array to be increasing

//traveres the array comparing the current element at 1 with the previous element, if the current element is smaller, increment it and store the number of increments on a variable which will then be returned.

//example:
//Input:
// 5
// 3 2 5 1 7

//(3 3 5 5 7)

// Output: 5
