const n = parseInt(prompt("소수 숫자를 입력하세요."), 10);
let flag = true;

for (let i = 2; i < n; i++) {
  if (n % i === 0) {
    flag = false;
    break;
  }
}

flag ? console.log("YES") : console.log("NO");
