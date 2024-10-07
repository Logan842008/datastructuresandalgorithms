function sumIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let groups = [intervals[0]];
  let total = 0;
  for (let i of intervals.slice(1)) {
    let lastGroup = groups[groups.length - 1];
    if (lastGroup[1] >= i[0]) {
      lastGroup[1] = Math.max(lastGroup[1], i[1]);
    } else {
      total += lastGroup[1] - lastGroup[0];
      groups.push(i);
    }
  }
  total += groups[groups.length - 1][1] - groups[groups.length - 1][0];
  return total;
}

/*
    TIME - O(n log n)
    SPACE - O(n)
*/
