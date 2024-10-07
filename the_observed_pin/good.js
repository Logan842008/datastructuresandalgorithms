function getPINs(observed) {
  // TODO: This is your job, detective!
  let checkers = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    [" ", "0", " "],
  ];
  let combs = [];
  let starter = observed.split("");
  for (let i in starter) {
    let coords = [];
    let possible = [];
    for (let j in checkers) {
      for (let k in checkers[j]) {
        if (checkers[j][k] == starter[i]) {
          coords = [parseInt(j), parseInt(k)];
        }
      }
    }
    possible.push(checkers[coords[0]][coords[1]]);
    if (coords[0] - 1 >= 0 && checkers[coords[0] - 1][coords[1]] !== " ") {
      possible.push(checkers[coords[0] - 1][coords[1]]);
    }
    if (coords[1] - 1 >= 0 && checkers[coords[0]][coords[1] - 1] !== " ") {
      possible.push(checkers[coords[0]][coords[1] - 1]);
    }
    if (
      coords[0] + 1 < checkers.length &&
      checkers[coords[0] + 1][coords[1]] !== " "
    ) {
      possible.push(checkers[coords[0] + 1][coords[1]]);
    }
    if (
      coords[1] + 1 < checkers[0].length &&
      checkers[coords[0]][coords[1] + 1] !== " "
    ) {
      possible.push(checkers[coords[0]][coords[1] + 1]);
    }
    combs.push(possible);
  }
  let result = [""];
  for (let possible of combs) {
    let temp = [];
    for (let prefix of result) {
      for (let digit of possible) {
        temp.push(prefix + digit);
      }
    }
    result = temp;
  }
  return result;
}

/*
    TIME - O(5^n)
    SPACE - O(5^n)
*/

console.log(getPINs("8342"));
