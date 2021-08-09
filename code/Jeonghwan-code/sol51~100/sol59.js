const str = prompt("문자열 입력하세요");
const result = str
  .padStart(25 + parseInt(str.length / 2, 10), "=")
  .padEnd(50, "=");

console.log(result);
