// let n = 12; 
// let arr = [];

// for(let i = 1; i <= n; i ++){
//     if(n%i ==0){
//         arr.push(i);
//     }
// }
// console.log(`${n}의 약수는 ${arr}로 총 ${arr.length}개 입니다.`);

let num1 = 24, num2 = 60;
let arr = [];
for(let i =1; i<=Math.min(num1,num2);i++){
    if(num1%i == 0 && num2%i==0){
        arr.push(i);
    }
}
console.log(`${num1}과 ${num2}의 공약수는 ${arr}로 총 ${arr.length}개 입니다.`);
