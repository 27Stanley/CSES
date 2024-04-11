function repetitions(dnaStr) {
  //   if (dnaStr.length === 1) {
  //     return 1;
  //   }

  //   let count = 1;
  //   let highestCount = 0;

  //   let usedCharacters = [];

  //   for (let i = 0; i < dnaStr.length; i++) {
  //     let char = dnaStr[i];

  //     if (!usedCharacters.includes(char)) {
  //       usedCharacters.push(char);
  //       console.log(char, usedCharacters);
  //       for (let j = 0; j < dnaStr.length; j++) {
  //         if (char === dnaStr[j]) {
  //           count++;
  //         }
  //       }
  //     }

  //     if (count > highestCount) {
  //       highestCount = count;
  //     }
  //     count = 1;
  //   }
  //   console.log(highestCount, "answer");
  //   return highestCount;

  let answer = 1;
  let count = 1;
  for (let i = 1; i < dnaStr.length; i++) {
    if (dnaStr[i] === dnaStr[i - 1]) {
      count++;
      console.log(dnaStr[i], count);
    } else {
      console.log("inelse");
      count = 1;
    }
    console.log(answer, count, `max num ${Math.max(answer, count)}`);
    answer = Math.max(answer, count);
  }
  return answer;
}

module.exports = repetitions;

//given a dna sequence, a string consisting of characters ACGT. Find the longest repetition in the sequence.
//maximum length of a substring containing one type of character.

//the only input being a string of n characters
//returns one integer with the length of the longest repetition

//
