const str = prompt("문자를 입력하세요.").split("");

for (let i = 0; i < str.length - 1; i++) {
  console.log(str[i], str[i + 1]);
}
