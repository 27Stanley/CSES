function numberSpiral(x, y) {
  if (x === 1 && y === 1) {
    return 1;
  }

  const biggerNum = largestNumber(x, y);
  const diagNum = biggerNum * biggerNum - (biggerNum - 1);
  if (x === y) {
    return x * x - (x - 1);
  } else if (x > y && x % 2 === 0) {
    return diagNum + (x - y);
  } else if (x > y && x % 2 !== 0) {
    return diagNum - (x - y);
  } else if (y > x && y % 2 === 0) {
    return diagNum - (y - x);
  } else {
    return diagNum + (y - x);
  }
}

function largestNumber(x, y) {
  return Math.max(x, y);
}

module.exports = numberSpiral;

//if row and column (x === y) are the same, row*row - (row-1) for answer

// if row > column (x > y) and even, (row*row - (row-1)) + (row-1)
// if row > column (x > y) and odd, (row*row - (row-1)) - (row-1)

//if column > row (y > x) and odd, (col*col - (col-1)) + (col-row)
//if column > row (y > x) and even, (col*col - (col-1)) - (col-row)
