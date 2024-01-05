function sumOfDivisors(num){
    let sum = 0;
    for (let i =0;i<num;i++){
        if(num % i ==0){
            sum += i;
        }
    }
    return sum;
}
 
let arr = []
for(let i = 2; i<10000; i++){
    if (sumOfDivisors(i) == i){
        arr.push(i);
    };
}
console.log(arr);