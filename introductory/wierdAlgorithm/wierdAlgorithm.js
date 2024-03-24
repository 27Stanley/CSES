//takes a positive integer input n
// if n is even, divide by 2
// if n is odd, multiply by 3 and add

//repeat until n is one,
//eg. start with 3, becomes 10, becomes 5, becomes 16, becomes 8, becomes 4, becomes 2, becomes 1

function wierdAlgorithm(n) {
  console.log(`the number is ${n}`);
  let newNum = n;

  while (n != 1) {
    if (newNum === 1) {
      return newNum;
    } else if (newNum % 2 === 0 && newNum !== 1) {
      console.log("even number detected");
      newNum = newNum / 2;
    } else {
      console.log("odd number detected");
      newNum = (newNum * 3 + 1) / 2;
    }
  }

  console.log(newNum);
  return newNum;
}

module.exports = wierdAlgorithm;
