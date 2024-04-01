//given a number between 1, 2 and n, find the missing number.

//first input is a line containing an integer, second input contains n-1 numbers, each number between 1 and n.

//eg. input1=5 input2= 2,3,1,5, output = 4

function missingNumber(num, missingNumArray) {
  const fullNumArray = [];

  for (let i = 1; i <= num; i++) {
    fullNumArray.push(i);
  }

  console.log(fullNumArray, missingNumArray);

  return num;
}

module.exports = missingNumber;
