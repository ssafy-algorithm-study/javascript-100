// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

const input = prompt('문자열을 입력해주세요.');

console.log(input);

const strArr = input.split('');

let strArr2 = [];

strArr.forEach(c => {
    if(c == c.toUpperCase()) {
        strArr2.push(c.toLowerCase())
    } else {
        strArr2.push(c.toUpperCase())
    }
})

console.log(strArr2.join(''));