function getPINs(observed) {
  const possibleCombs = {
    0: ["0", "8"],
    1: ["1", "2", "4"],
    2: ["1", "2", "3", "5"],
    3: ["2", "3", "6"],
    4: ["1", "4", "5", "7"],
    5: ["2", "4", "5", "6", "8"],
    6: ["3", "5", "6", "9"],
    7: ["4", "7", "8"],
    8: ["0", "5", "7", "8", "9"],
    9: ["6", "8", "9"],
  };

  // Recursive helper function
  function generate(index) {
    if (index === observed.length) return [""];

    const possible = possibleCombs[observed[index]];
    const suffixes = generate(index + 1);
    const result = [];

    for (let digit of possible) {
      for (let suffix of suffixes) {
        result.push(digit + suffix);
      }
    }
    console.log(result);
    return result;
  }

  return generate(0);
}

/*
    TIME - O(5^n)
    SPACE - O(5^n * n)
*/

console.log(getPINs("834"));
