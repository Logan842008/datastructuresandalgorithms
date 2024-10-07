function sudoku(puzzle) {
  let hasUnResolved = false;
  for (let i in puzzle) {
    for (let j in puzzle[i]) {
      if (puzzle[i][j] == 0 || puzzle[i][j].length > 1) {
        let row = puzzle[i];
        let col = [];
        let grid = [];
        for (let k in puzzle) {
          col.push(puzzle[k][j]);
        }
        let startRow = Math.floor(i / 3) * 3;
        let startCol = Math.floor(j / 3) * 3;
        for (let i in puzzle) {
          if (i >= startRow && i <= startRow + 2) {
            let temp = [];
            for (let j in puzzle[i]) {
              if (j >= startCol && j <= startCol + 2) {
                temp.push(puzzle[i][j]);
              }
            }
            grid.push(temp);
          }
        }
        puzzle[i][j] = isValid(puzzle[i][j], row, col, grid);
        if (Array.isArray(puzzle[i][j])) {
          hasUnResolved = true;
        }
      }
    }
  }
  if (hasUnResolved) {
    return sudoku(puzzle);
  } else {
    return puzzle;
  }
}
function isValid(item, row, col, grid) {
  let possibleNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (item.length > 1) {
    possibleNums = item;
  }
  for (let i of row) {
    if (i !== 0 && possibleNums.includes(i)) {
      possibleNums.splice(possibleNums.indexOf(i), 1);
    }
  }
  for (let j of col) {
    if (j !== 0 && possibleNums.includes(j)) {
      possibleNums.splice(possibleNums.indexOf(j), 1);
    }
  }
  for (let k of grid.flat()) {
    if (k !== 0 && possibleNums.includes(k)) {
      possibleNums.splice(possibleNums.indexOf(k), 1);
    }
  }
  if (possibleNums.length == 1) {
    return possibleNums[0];
  } else {
    return possibleNums;
  }
}

/*
    TIME - O(n*9^2)
    SPACE - O(n)
*/

console.log(
  sudoku([
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ])
);
