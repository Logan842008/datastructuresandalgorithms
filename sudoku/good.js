function sudoku(puzzle) {
  const possibleNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let emptySpaces = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (puzzle[i][j] == 0) {
        emptySpaces.push([i, j]);
      }
    }
  }
  function recurse(index) {
    if (index >= emptySpaces.length) {
      return true;
    }
    let [givenRow, givenCol] = emptySpaces[index];
    let grid = [];
    let startRow = Math.floor(givenRow / 3) * 3;
    let startCol = Math.floor(givenCol / 3) * 3;
    let row = puzzle[givenRow];
    let col = [];
    for (let k in puzzle) {
      col.push(puzzle[k][givenCol]);
    }
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        grid.push(puzzle[i][j]);
      }
    }
    for (let num of possibleNums) {
      if (isValid(num, row, col, grid)) {
        puzzle[givenRow][givenCol] = num;
        if (recurse(index + 1)) {
          return true;
        } else {
          puzzle[givenRow][givenCol] = 0;
        }
      }
    }
    return false;
  }

  return recurse(0) ? puzzle : null;
}

function isValid(number, row, col, grid) {
  return (
    !row.includes(number) && !col.includes(number) && !grid.includes(number)
  );
}

/*
    TIME - O(9^n)
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
