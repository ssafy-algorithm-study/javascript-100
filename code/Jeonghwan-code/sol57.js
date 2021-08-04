function solution(n) {
  let str = "";
  let count = 0;

  for (let i = 0; i <= n; i++) {
    str += i;
  }

  for (let c of str) {
    if (c === "1") {
      count++;
    }
  }

  return count;
}

const n = 11;

console.log(solution(n));
