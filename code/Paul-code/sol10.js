// 별찍기
// 크리스마스 트리\

let input = prompt("입력값")

let half = parseInt((input * 2 - 1) / 2);

let str = '';

for (let i = 0; i < input; i++) {
    for (let j = 0; j < input*2-1; j++) {
        if(j < half-i) {
            str += ' ';
        } else if(j > half + i){
            str += ' ';
        } else {
            str += '*';
        }
    }
    str += '\n';
}

console.log(str);