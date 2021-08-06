function solution(n) {
  if (n.length <= 3) {
    return n;
  } else {
    return solution(n.slice(0, n.length - 3)) + "," + n.slice(n.length - 3);
  }
}

const n = prompt("숫자를 입력해주세요.");

console.log(solution(n));
