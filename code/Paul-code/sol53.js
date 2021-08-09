// 괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')' 와 같은 것을 말한다. 
// 그중 괄호의 모양이 바르게 구성된 문자열을 바른 문자열, 그렇지 않은 문자열을 바르지 않은 문자열이라 부르도록 하자. 

// (())와 같은 문자열은 바른 문자열이지만 ()()) 와 같은 문자열은 바르지 않은 문자열이다.
// (해당 문제에서는 소괄호만 판별하지만,  중괄호와 대괄호까지 판별해 보세요.)

// 입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.

function isBrackets(str) {

  if(str.length % 2 != 0) {
    return false;
  }

  let center = Math.floor(str.length / 2);

  let index= 0;

  while(index < center) {
    if(str[index] != '('){
      return false;
    }
    index++;
  }
  return true;
}

const str = prompt('괄호를 판단해보자').split('')

console.log(str)

console.log(isBrackets(str))