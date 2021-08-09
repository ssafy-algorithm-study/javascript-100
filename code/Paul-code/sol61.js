// 문자열 압축하기

// 입력
// aaabbbbcdddd

// 출력
// a3b4c1d4

const input = prompt('입력').split("");

console.log(input)

let mySet = new Set();


let result = ""
let cnt = 1;
for (let i = 0; i < input.length; i++) {
    if(i != input.length - 1 && input[i] === input[i+1]){
        cnt++;
        continue;
    }
    result += (input[i] + (cnt > 1 ? cnt : null));
    cnt = 1;
}

console.log(result)