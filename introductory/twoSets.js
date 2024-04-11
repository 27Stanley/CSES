function twoSets(n) {
  if (n <= 1 || n > 10 ** 6) {
    return "NO";
  }

  const arrayOfN = Array.from({ length: n }, (_, i) => i + 1);

  let sumOfN = 0;

  for (let i = 0; i < arrayOfN.length; i++) {
    sumOfN += arrayOfN[i];
  }

  if (sumOfN % 2 !== 0) {
    return "NO";
  }

  const targetNum = sumOfN / 2;
  const currentSum = 0;
  console.log(`target num ${targetNum}`);

  while (currentSum !== targetNum) {
    for (let j = 0; j < arrayOfN; j++) {
      if (currentSum < targetNum) {
        currentSum += arrayOfN[j];
      }
      console.log(currentSum);
    }
  }
}

module.exports = twoSets;

//divide numbers up to n into two sets of equal sum

//output is to be yes or no
//if yes, print the number of elements in the first set, followed by the elements on a separate line, then print the second set in the same way.

//example:
// Input = 7
// Output = YES
// 4
// 1 2 4 7
// 3
// 3 5 6

//contraints of 1 <= n <=10^6

//if sum or numbers up to n is odd, result is no, if even, result is yes
