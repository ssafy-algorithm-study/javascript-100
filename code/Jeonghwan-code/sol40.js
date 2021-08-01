const limit = parseInt(prompt("제한 무게를 입력하세요."));
const n = parseInt(prompt("인원수를 입력하세요"), 10);
let total = 0;
let count = 0;

for (let i = 0; i < n; i++) {
  total += parseInt(prompt("무게를 입력하세요."), 10);
  if (total <= limit) {
    count += 1;
  }
}

console.log(count);
