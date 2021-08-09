// 천단위 콤마


const input = prompt("입력해주세요").split('');


console.log(input)



for (let i = input.length-1; i >= 0; i-=3) {
    
    let temp;
    if(i !== input.length -1){
        temp = input[i]+","
        input[i] = temp;
    }

    
}

const result = input.join('')

console.log(result)