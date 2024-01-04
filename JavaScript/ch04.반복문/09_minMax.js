let numbers = [3, 56, 43, 25, 68, 19];
Math.max(numbers);

let min = numbers[0];
let max = numbers[0];
for(num of numbers){
    if(min > num){
        min = num;
    }
    if(max < num){
        max = num;
    }
}
console.log(`${numbers}의 최소값은 ${min}이고, 최대값은 ${max}입니다.`)