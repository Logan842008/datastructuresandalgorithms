function sumIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let total = 0;
  let [start, end] = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const [currentStart, currentEnd] = intervals[i];
    if (currentStart <= end) {
      end = Math.max(end, currentEnd);
    } else {
      total += end - start;
      [start, end] = intervals[i];
    }
  }
  total += end - start;

  return total;
}

/*
    TIME - O(n log n)
    SPACE - O(1)
*/

console.log(
  sumIntervals([
    [1, 4],
    [3, 5],
    [6, 8],
    [9, 10],
  ])
);
