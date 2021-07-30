// 구구단

const num = parseInt(prompt('1~9 숫자를 입력하세요'))

let str = "";

for (let i = 1; i <= 9; i++) {
    str = str + (i * num) + " "
}

console.log(str)