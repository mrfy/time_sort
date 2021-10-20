import { historyRange, putStates } from "./ranges.js";

var result = [];
var ai = 0,
  alength = historyRange.length,
  aStart,
  aEnd;
var bi = 0,
  blength = putStates.length,
  bStart,
  bEnd;
let i = 0;
while (ai < alength && bi < blength) {
  aStart = historyRange[ai].start.getTime();
  aEnd = historyRange[ai].end.getTime();
  bStart = putStates[bi].start.getTime();
  bEnd = putStates[bi].end.getTime();
  console.log(
    "🚀 ~ file: index.js ~ line 39 ~ bi",
    i,
    ai,
    bi,
    aEnd < bStart,
    bEnd < aStart
  );

  if (bStart > aEnd) {
    console.log("🚀 ~ file: index.js ~ line 36 ~ ai", ai);

    // a ends before b
    ai++;
  } else if (aStart > bEnd) {
    console.log("🚀 ~ file: index.js ~ line 39 ~ bi", bi);

    // b ends before a
    bi++;
  } else {
    // a overlaps b
    result.push([
      aStart > bStart ? historyRange[ai].start : putStates[bi].start,
      aEnd < bEnd ? historyRange[ai].end : putStates[bi].end,
    ]);
    // the smaller range is considered processed
    if (aEnd <= bEnd) {
      ai++;
    } else {
      bi++;
    }
  }
  i++;
}
console.log(result);

var A = [
  [1, 3],
  [7, 9],
  [12, 18],
];
var B = [
  [2, 3],
  [4, 5],
  [6, 8],
  [13, 14],
  [16, 17],
];
