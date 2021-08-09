nationWidth = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

const korWidth = nationWidth["korea"];
delete nationWidth["korea"];
const keys = Object.keys(nationWidth);
const values = Object.values(nationWidth);
let minIdx = 0;
let minGap = Math.abs(korWidth - nationWidth[keys[0]]);

for (let i = 1; i < keys.length; i++) {
  if (minGap > Math.abs(korWidth - nationWidth[keys[i]])) {
    minIdx = i;
    minGap = Math.abs(korWidth - nationWidth[keys[i]]);
  }
}

console.log(keys[minIdx], minGap);
