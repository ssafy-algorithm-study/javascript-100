// **2-gram**이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다. 

// 예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.


/*
입력
Javascript

출력
J a
a v
v a
a s
s c
c r
r i
i p
p t

*/

const input = prompt("단어를 입력").split('')

console.log(input)

for (let i = 0; i < input.length; i++) {

    
    const elementOne = input[i];
    if(i != input.length - 1){
        const elementTwo = input[i+1];
        console.log(elementOne, elementTwo)
    }



    
}