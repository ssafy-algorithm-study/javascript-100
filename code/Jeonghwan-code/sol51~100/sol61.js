const str = prompt("문자열을 입력하세요.");
const arr = [];
const arrCount = {};

for (let c of str) {
  if (arr.includes(c)) {
    arrCount[c] += 1;
  } else {
    arr.push(c);
    arrCount[c] = 1;
  }
}

let result = "";

for (let key of arr) {
  result += key + arrCount[key];
}

console.log(result);
