// 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

const input = prompt("숫자들을 여러개 입력해주세요 (공백으로 구분)").split('')


const reversed = input.reverse();


let str = "";

reversed.forEach(num => {
    str = str + num + " ";
})


console.log(str)

