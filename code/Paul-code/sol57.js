
let cnt = 0;
let arr = [];

let N = 20;

for (let i = 0; i <= N; i++) {
  arr = i.toString().split('');

  if(arr.length === 1 ) {
    cnt += arr[0] == '1' ? 1 : 0;
  } else if(arr.length > 1){
    arr.forEach(i => {
      if(i == '1'){
        cnt++;
      }
    })
  }
}

console.log(cnt)