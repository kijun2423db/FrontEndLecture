let year = 2400;

// if(year % 4 == 0){
//     if(year % 100 == 0){
//         if(year % 400 == 0){
//             console.log(`${year}년은 윤년입니다.`)
//         }else{
//             console.log(`${year}년은 평년입니다.`)
//         }
//     }else{
//         console.log(`${year}년은 평년입니다.`)
//     }
// }else{
//     console.log(`${year}년은 평년입니다.`)
// }

if(year%4 ==0 && year % 100 != 0 || year % 400 == 0){
    console.log(`${year}년은 윤년입니다.`)
}else{
    console.log(`${year}년은 평년입니다.`)
}