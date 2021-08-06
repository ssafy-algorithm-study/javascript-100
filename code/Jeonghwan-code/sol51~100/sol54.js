function solution(arr) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return "NO";
    }
  }
  return "YES";
}

const arr = prompt("숫자를 공백을 두고 입력하세요.")
  .split(" ")
  .map((n) => parseInt(n, 10));

console.log(solution(arr));
