const date = new Date();
const t = date.getTime();
const year = Math.floor(t / (60 * 60 * 24 * 365 * 1000)) + 1970; // 초 * 분 * 시간 * 일 * ms

console.log(year);
