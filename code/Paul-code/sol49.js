// 최댓값

// 입력 : 10 9 8 7 6 5 4 3 2 1
// 출력 : 10

const nums = prompt('10개의 숫자를 입력하시오(공백으로 구분)').split(' ')

console.log(nums)

const parsed = nums.map(num => parseInt(num))

console.log(parsed)

console.log(Math.max(...parsed))