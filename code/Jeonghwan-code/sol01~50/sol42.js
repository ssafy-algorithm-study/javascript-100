const m = parseInt(prompt("월을 입력하세요."), 10);
const d = parseInt(prompt("일을 입력하세요."), 10);

function solution(a, b) {
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const date = new Date("2020-" + a + "-" + b);

  return day[date.getDay()];
}

console.log(solution(m, d));
