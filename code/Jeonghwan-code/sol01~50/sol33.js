const nums = prompt("한 줄에 여러개의 숫자를 입력해주세요.").split(" ");
let result = "";

nums.reverse();

for (let i = 0; i < nums.length; i++) {
  result += nums[i] + " ";
}

console.log(result);
