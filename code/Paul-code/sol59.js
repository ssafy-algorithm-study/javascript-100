const str = prompt("문자열을 입력해주세요.")

let len = str.length;

console.log(str)

let start = Math.floor((50 - len) / 2)

let printStr = ""

for (let i = 0; i < 50; i++) {
  if(i == start) {
    printStr += str;

    i += str.length - 1;
    continue;
  }
  printStr += "=" 
  
}

console.log(printStr)
