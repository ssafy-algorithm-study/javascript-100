// 연속되는 수

const array = prompt('연속된 수를 입력하세요 (공백으로 구분)').split(' ')


const numbers = array.map(i => parseInt(i));

console.log(isConsecutive(numbers));





function isConsecutive(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if(array[i] + 1 !== array[i+1]) return false;
  }
  return true;
}