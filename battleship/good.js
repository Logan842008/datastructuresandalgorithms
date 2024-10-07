function validateBattlefield(field) {
  const n = 10;
  const visited = Array(n)
    .fill()
    .map(() => Array(n).fill(false));
  const shipCounts = { 4: 0, 3: 0, 2: 0, 1: 0 };

  function isValid(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n;
  }

  function floodFill(x, y) {
    if (!isValid(x, y) || visited[x][y] || field[x][y] === 0) return 0;

    visited[x][y] = true;
    let size = 1;

    for (let dx of [-1, 1]) {
      for (let dy of [-1, 1]) {
        if (isValid(x + dx, y + dy) && field[x + dx][y + dy] === 1) return -1; // Diagonal connection found
      }
    }

    for (let [dx, dy] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      size += floodFill(x + dx, y + dy);
    }

    return size;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (field[i][j] === 1 && !visited[i][j]) {
        let size = floodFill(i, j);
        if (size === -1 || size > 4) return false;
        shipCounts[size] = (shipCounts[size] || 0) + 1;
      }
    }
  }
  return (
    shipCounts[4] === 1 &&
    shipCounts[3] === 2 &&
    shipCounts[2] === 3 &&
    shipCounts[1] === 4
  );
}

/*
    TIME - O(n^2)
    SPACE - O(n^2)
*/
