// `20190923`을 출력합니다.  아래 기준만 만족하면 됩니다.

// 1. 코드 내에 숫자가 없어야 합니다.
//     - 예) console.log(20190923)이라고 하시면 안됩니다.
// 2. 파일 이름이나 경로를 사용해서는 안됩니다.
// 3. 시간, 날짜 함수를 사용해서는 안됩니다.
// 4. 에러 번호 출력을 이용해서는 안됩니다.
// 5. input을 이용해서는 안됩니다.

let str = "aacdddddddddfffffffffgghhh";
let zero = ""
console.log(`${str.match(/a/g).length}${Number(str.match(/b/g))}${str.match(/c/g).length}${str.match(/d/g).length}${Number(str.match(/e/g))}${str.match(/f/g).length}${str.match(/g/g).length}${str.match(/h/g).length}`)