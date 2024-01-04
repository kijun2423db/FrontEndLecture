let arr = [];
for(let i =3; i<=10000; i++){
    let sum = 0;
    for (let k=1; k<i; k++){
        if(i%k ==0){
            sum += k;
        }
    }
    if(sum == i){
        arr.push(i);
    }
}
console.log(arr);

for(let i=1; i<1000;i++){
    for(let j=2; j<1000; j++){
        if((i**2 + j**2 == (1000-(i+j))**2) && (i < j && j < (1000-(i+j)))){
            console.log(`${i}, ${j}, ${1000-i-j}`);
        }
    } 
}