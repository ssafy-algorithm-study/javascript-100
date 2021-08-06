let N = parseInt(prompt("정량을 입력해주세요."), 10);
let count = 0;

while (true) {
  if (N % 7 === 0) {
    count += parseInt(N / 7, 10);
    break;
  }
  N -= 3;
  count++;

  if (N < 0) {
    count = -1;
    break;
  }
}

console.log(count);
