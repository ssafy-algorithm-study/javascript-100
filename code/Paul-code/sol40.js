// 테마파크에 온 원범이와 친구들은 놀이기구를 타려고 합니다. 
// 모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다. 

// 원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.

// 첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다. 
// 그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.


/*
입력
50
5
20
20
20
20
20

출력
2
*/

const limit = parseInt(prompt('제한 무게를 입력해주세요'))

const n = parseInt(prompt("친구들의 인원을 입력해주세요"))

const arr = []

// 무작위 몸무게 생성
for (let i = 0; i < n; i++) {
    let weight = Math.floor(Math.random() * 30 + 1)
    arr.push(weight)
    console.log(arr[i])
}
let sum = 0;
let numOfPeople = 0;

for (let j = 0; j < n; j++) {
    sum += arr[j];
    if(sum > limit) {
        numOfPeople = j;
        break;
    }
}

console.log(numOfPeople + "명만 탑승할 수 있습니다.")