function solution(schedule, curr) {
  let answer = [];

  curr = curr.split(":").map((n) => parseInt(n, 10));
  curr = curr[0] * 60 + curr[1];

  for (let t in schedule) {
    let time = schedule[t].split(":").map((n) => parseInt(n, 10));
    time = time[0] * 60 + time[1];

    if (time < curr) {
      answer.push("지나갔습니다.");
    } else {
      let hour = parseInt((time - curr) / 60, 10);
      let min = (time - curr) % 60;

      answer.push(
        String(hour).padStart(2, 0) + "시간" + String(min).padStart(2, 0) + "분"
      );
    }
  }

  return answer;
}

console.log(solution(["12:30", "13:20", "14:13"], "12:40"));
