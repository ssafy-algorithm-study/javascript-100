// 2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
// 두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
// 요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.

// 예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

// 제한 조건
// 2020년은 윤년입니다. (2월 29일 존재)
// 2020년 a월 b일은 실제로 있는 날입니다. 
// (13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)

const month = parseInt(prompt("달을 입력해주세요"))
const day = parseInt(prompt("일을 입력해주세요"))
 

function dayOfTheWeek(month, day) {
    let days = 0; // month 달 이전 까지의 날 수
    switch (month) {
        case 1:
            days = 0;
            break;
        case 2:
            days = 31;
            break;
        case 3:
            days = 31 + 29;
            break;
        case 4:
            days = 31 + 29 + 31;
            break;
        case 5:
            days = 31 + 29 + 31 + 30;
            break;
        case 6:
            days = 31 + 29 + 31 + 30 + 31;
            break;
        case 7:
            days = 31 + 29 + 31 + 30 + 31 + 30;
            break;
        case 8:
            days = 31 + 29 + 31 + 30 + 31 + 30 + 31;
            break;
        case 9:
            days = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31;
            break;      
        case 10:
            days = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30;
            break;    
        case 11:
            days = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31;
            break;    
        case 12:
            days = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30;
            break;              
        default:
            break;
    }
    days += day

    switch (days%7) {
        case 1:
            return "WED"
        case 2:
            return "THU"
        case 3:
            return "FRI"
        case 4:
            return "SAT"
        case 5:
            return "SUN"
        case 6:
            return "MON"
        case 0:
            return "TUE"
        default:
            break;
    }

    
}

console.log(dayOfTheWeek(month, day))