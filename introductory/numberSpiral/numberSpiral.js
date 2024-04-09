function numberSpiral() {
  return 1;
}

module.exports = numberSpiral;

//if row and column (x === y) are the same, row*row - (row-1) for answer

// if row > column (x > y) and even, (row*row - (row-1)) + (row-1)
// if row > column (x > y) and odd, (row*row - (row-1)) - (row-1)

//if column > row (y > x) and odd, (col*col - (col-1)) + (col-row)
//if column > row (y > x) and even, (col*col - (col-1)) - (col-row)
