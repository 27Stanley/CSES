function permutations(integer) {
  if (integer <= 4) {
    return "No solution";
  }

  let integerArray = Array.from({ length: integer }, (_, i) => i + 1);

  let answer = [];

  for (let y = 1; y <= integer; y += 2) {
    answer.push(y);
  }

  for (let x = 2; x <= integer; x += 2) {
    answer.push(x);
  }

  console.log(answer);
  return answer;
}

module.exports = permutations;

//valid solution is if no adjacent numbers have a difference of 1

//for input as 5 - 1, 3, 5, 2, 4

//for input as 6 - 1,3,5,2,4,6

//for input as 7- 1,3,5,7,2,4,6

//for - if even numbers, push to answer, then push if odds

//go through the array, if
