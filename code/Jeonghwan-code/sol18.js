const scores = prompt("국어, 수학, 영어 순으로 성적을 입력하세요.").split(" ");
let sum = 0;
let avg;

for (let i = 0; i < scores.length; i++) {
  sum += parseInt(scores[i], 10);
}

avg = Math.floor(sum / scores.length);
console.log(avg);
