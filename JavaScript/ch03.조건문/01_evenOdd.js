let num = Math.ceil(Math.random() * 100) //1 ~ 100 정수

if(num % 2 ==0){
    console.log(`${num} 은/는 짝수입니다.`);
}
else{
    console.log(`${num} 은/는 홀수입니다.`)
}

num =Math.ceil(Math.random() * 100);
let result = (num % 2 ==0) ? '짝수' : '홀수';
console.log(`${num} 은/는 ${result}입니다.`);

