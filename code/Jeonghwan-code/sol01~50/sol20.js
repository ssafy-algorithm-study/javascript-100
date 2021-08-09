const n = prompt("두 숫자를 입력하세요.").split(" ");
const quotient = Math.floor(parseInt(n[0], 10) / parseInt(n[1], 10));
const remainder = parseInt(n[0], 10) % parseInt(n[1], 10);

console.log(`${quotient} ${remainder}`);
