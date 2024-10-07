function validateBattlefield(field) {
  let checkers = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      if (field[i][j] == 1) {
        let length = checkShip(i, j, field);
        if (!length) return false;
        else {
          let index = checkers.indexOf(length);
          if (index == -1) return false;
          checkers.splice(index, 1);
        }
      }
    }
  }
  return checkers.length == 0;
}

function checkShip(row, col, field) {
  let length = 1;
  if (row < 0 || row >= 10 || col < 0 || col >= 10) {
    return false;
  }
  let diagonalDir = [
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];
  for (let [dr, dc] of diagonalDir) {
    let newRow = row + dr;
    let newCol = col + dc;
    if (
      newRow < 10 &&
      newRow >= 0 &&
      newCol < 10 &&
      newCol >= 0 &&
      field[newRow][newCol] == 1
    ) {
      return false;
    }
  }
  field[row][col] = 0;
  let isHorizontal = col + 1 <= 10 && field[row][col + 1] == 1;
  let isVertical = row + 1 <= 10 && field[row + 1][col] == 1;
  if (isHorizontal && isVertical) {
    return false;
  }

  if (isHorizontal) {
    let c = col + 1;
    while (c <= 10 && field[row][c] == 1) {
      field[row][c] = 0;
      length++;
      c++;
    }
  }
  if (isVertical) {
    let r = row + 1;
    while (r <= 10 && field[r][col] == 1) {
      field[r][col] = 0;
      length++;
      r++;
    }
  }
  return length;
}

/*
    TIME - O(n^2)
    SPACE - O(1)
*/

console.log(
  validateBattlefield([
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ])
);
