function solution(str) {
  let answer = "";

  for (let c of str) {
    if (c === c.toUpperCase()) {
      answer += c.toLowerCase();
    } else {
      answer += c.toUpperCase();
    }
  }

  return answer;
}

const str = prompt("문자열을 입력하세요.");

console.log(solution(str));
