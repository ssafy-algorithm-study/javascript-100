
// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

let input = prompt("공백으로 구분하여 두 숫자를 입력해주세요").split(' ')

const a = parseInt(input[0]);

const b = parseInt(input[1]);

console.log(Math.floor(a/b), a%b);