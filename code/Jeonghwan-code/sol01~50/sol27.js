const name = prompt("두 학생의 이름을 입력하세요.").split(" ");
const score = prompt("두 학생의 수학 점수를 입력하세요.").split(" ");
const student = {};

for (let i = 0; i < name.length; i++) {
  student[name[i]] = parseInt(score[i], 10);
}

console.log(student);
