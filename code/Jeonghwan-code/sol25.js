function getArea(n) {
  const area = n * n * Math.PI;
  return area;
}

let n = parseInt(prompt("반지름의 길이를 입력하세요."), 10);

console.log(getArea(n));
