const n = parseInt(prompt("1 ~ 9 까지의 숫자 중 하나를 입력하세요."), 10);

function multiTable(n) {
  let result = "";
  for (let i = 1; i <= 9; i++) {
    result += n * i + " ";
  }
  return result;
}

console.log(multiTable(n));
