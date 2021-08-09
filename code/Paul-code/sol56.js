// 다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

/*
데이터
nationWidth = {
     'korea': 220877,
     'Rusia': 17098242,
     'China': 9596961,
     'France': 543965,
     'Japan': 377915,
     'England' : 242900,
}

출력
England 22023

*/
nationWidth = {
       'korea': 220877,
       'Rusia': 17098242,
       'China': 9596961,
       'France': 543965,
       'Japan': 377915,
       'England' : 242900,
  }

 const values = Object.values(nationWidth)

 const keys = Object.keys(nationWidth)

 const korValue = nationWidth['korea']

 let min = Number.MAX_VALUE;
 let minIndex = 0;
 let minDiff = 0;
 for (let i = 1; i < values.length; i++) {
   diff = Math.abs(values[i] - korValue)
   if(diff < min ) {
     minIndex = i;
     minDiff = diff;
   }
 }

 console.log(keys[minIndex], minDiff)