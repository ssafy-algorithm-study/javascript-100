function solution(n) {
  let nPerson = 0;
  let total = 0;
  let temp = 0;

  while (true) {
    total = parseInt((nPerson * (nPerson - 1)) / 2, 10);

    if (n < total) {
      break;
    }

    temp = total;
    nPerson += 1;
  }

  return [parseInt(n - temp, 10), nPerson];
}

const handShake = 59;

console.log(solution(handShake));
