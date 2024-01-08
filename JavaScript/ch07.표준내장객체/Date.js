let today = new Date();

console.log(today);                             //2024-01-08T04:49:59.771Z
console.log(today.toString());                  //Mon Jan 08 2024 13:49:59 GMT+0900 (대한민국 표준시)
console.log(today.toLocaleString());            //2024. 1. 8. 오후 1:49:59


//YYYY-MM-DD hh:mm:ss 형식
function twoDigit(num){
    return (num <10)? '0'+num : String(num);
}

function myDateTime(date){

    return `${date.getFullYear()}-${twoDigit(date.getMonth()+1)}-${twoDigit(date.getDate())} ` +
    `${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`;
}
console.log(myDateTime(today));

//임의의 날짜/시간

let yesterday = new Date('2024-01-07 14:00:00');
let tomorrow = new Date('Jan 9 2024');
let nextSunday = new Date ('01/14/24');
let lastChristmas = new Date(2023, 11, 25, 19,30); //month는 1차이나는거 주의하기 ㅇㅇ...
console.log(myDateTime(lastChristmas));

//Unix time (1970-01-01 00:00:00 이후 ms 단위)
let unixDay = new Date(1.70469e12);
console.log(myDateTime(unixDay));

//시간 연산
let Date = new Date()
date.setDate(date.getDate+100);
console.log(myDateTime(date));
date.setDate(daet.getDate = 100);
console.log(myDateTime(today.getDate() + 100));
console.log(myDateTime(today.getDate() - 100));
console.log(myDateTime(date));

date.setMonth(date.getMonth() + 6);
date.setFullYear(date.getFullYear());
console.log(myDateTime(date));


//시간 간격
let gradDay = new Date('2024-06-13 `17:00');
let diffMs = gradDay.getTime() - new Date().getTime();
let diffDay = Math.ceil(diffMs/(1000 * 60 * 60 *24));
console.log(diffDa);