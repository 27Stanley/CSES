function twoKnights(n) {
  if (n === 1) {
    return [0];
  }
}

module.exports = twoKnights;

//with input as n, count the number of ways two knights can be placed on a k x k chessboard when they arent attacking each other.

//where if n = 3, count number of ways the knights can be placed for a 1x1 board, 2x2 board and 3x3 board

//output is 0, 6, 28 for n = 3

//output is 0, 6, 28, 96, 252, 550, 1056, 1848 for k = 8
