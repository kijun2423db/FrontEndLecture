let sum =0;

for (let i = 1; i<=1000; i++){
    sum += i;
}
console.log(`1에서 1000까지의 합은 ${sum}입니다.`);

let sum2 =0;

for (let i = 1; i<=1000; i+=2){
    sum2 += i;
}
console.log(`1에서 1000까지의 홀수합은 ${sum2}입니다.`);

let sum3 = 0;
for (let i = 2; i<=1000; i+=2){
    sum3 += i;
}
console.log(`1에서 1000까지의 짝수합은 ${sum3}입니다.`);

let sum4 = 1;
for (let i = 1; i<=10; i++){
    sum4 *= i;
}
console.log(`1에서 10까지의 곱은 ${sum4}입니다.`);

let str = "";
let fruits = ['사과', '감', '귤', '배'];
for(fruit of fruits){
    str += fruit;
    str += ', ';
}
console.log(str);
