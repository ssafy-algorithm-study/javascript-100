function solution(n) {
  let arr = [];
  let sum = 0;

  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }

  arr.forEach((num) => {
    while (num !== 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
  });

  return sum;
}

console.log(solution(20));
