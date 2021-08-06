function findMax(arr) {
  let max = arr[0];

  for (let value of arr) {
    if (max < value) {
      max = value;
    }
  }
  return max;
}

const arr = prompt("숫자 10개를 공백으로 구분지어 입력하세요.")
  .split(" ")
  .map(function (n) {
    return parseInt(n, 10);
  });

console.log(findMax(arr));
