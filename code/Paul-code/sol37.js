const names = prompt('학생들이 뽑은 후보들을 나열해주세요(공백으로 구분)').split(' ')

const obj = {
}

for (let i = 0; i < names.length; i++) {
    if(Object.keys(obj).includes(names[i])){
        obj[names[i]]++;
    } else {
        obj[names[i]] = 1;
    }
}

let maxIndex = 0;
let max = 0;

for (let i = 0; i < Object.keys(obj).length; i++) {
    if(max < obj[Object.keys(obj)[i]]) {
        max = obj[Object.keys(obj)[i]]
        maxIndex = i;
    }
}

let result = `${Object.keys(obj)[maxIndex]}(이)가 총 ${max}표로 반장이 되었습니다.`
console.log(result)
