const n = prompt();
let result = "";

for (let i = 0; i < n; i++) {
  let line = "";
  for (let j = 0; j < n - i; j++) {
    line += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    line += "*";
  }
  result += line + "\n";
}

console.log(result);
