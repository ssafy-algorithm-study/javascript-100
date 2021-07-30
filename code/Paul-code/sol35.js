// 2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다. 

const a = one(2); // a는 2제곱 함수
const b = one(3); // b는 3제곱 함수
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));

function one(n){
    function two(times){
        //pass
        
        return Math.pow(times, n); 
    }
    return two;
}
