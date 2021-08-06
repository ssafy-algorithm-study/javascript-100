const str = prompt("문자열을 입력해주세요.").split(" ");
const result = str.map((c) => c.charAt(0));

console.log(result.join(""));
