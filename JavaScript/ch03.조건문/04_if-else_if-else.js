let score = Math.ceil(Math.random() * 60) + 40; //41~100 정수
let grade;

if (score >= 90) {
    grade = 'A';
}
else if(score >=80){
    grade = 'B';
}else if(score >=70){
    grade = 'C';
}else if(score >=60){
    grade = 'D';
}else {
    grade = 'F';
}
console.log(`점수: ${score}, 학점: ${grade}`)

if (score % 5 ==0 && score%7 ==0){
    console.log('FizzBuzz');
}else if (score %5 ==0){
    console.log('Fizz');
}else if (score %7 ==0){
    console.log('Buzz');
}else{
    console.log(score);
}
