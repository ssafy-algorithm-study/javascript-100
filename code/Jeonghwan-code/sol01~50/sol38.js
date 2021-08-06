const scores = prompt("점수를 입력하세요.")
  .split(" ")
  .map(function (n) {
    return parseInt(n, 10);
  });
let count = 0;
let arr = [];

scores.sort((a, b) => {
  return a - b;
});

while (arr.length < 3) {
  let n = scores.pop();
  if (!arr.includes(n)) {
    arr.push(n);
  }
  count += 1;
}

console.log(count);
