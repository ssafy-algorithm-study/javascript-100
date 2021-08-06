function solution(str) {
  let arr = [];

  for (let c of str) {
    if (c === "(") {
      arr.push("(");
    } else if (c === ")") {
      if (arr.length === 0) {
        return false;
      }
      arr.pop();
    } else {
      return false;
    }
  }

  return true;
}

const str = prompt("괄호 문자열을 입력해주세요.").split("");
const result = solution(str) ? "YES" : "NO";

console.log(result);
