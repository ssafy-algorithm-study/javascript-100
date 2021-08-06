// 입력
// 복잡한 세상 편하게 살자

// 출력
// 복세편살

const input = prompt('입력').split(' ')


let result = "";
input.forEach(i => {
    result += i.slice(0, 1);
})

console.log(result);