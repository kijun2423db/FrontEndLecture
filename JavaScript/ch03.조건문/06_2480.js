let v1 = 6;
let v2 = 2;
let v3 = 5;
let prize;

if(v1 == v2 && v2 == v3){
    prize = 10000 + v1*1000
}else if(v1 == v2 || v1 == v3){
    prize = 1000 + v1*100;
}else if(v2 == v3){
    prize = 1000+v2*100;
}else{
    prize = Math.max(v1,v2,v3)*100;
}
console.log(`prize : ${prize}`)

