function sum(from,to){
    let result = 0;
    for(let i=from; i<=to; i++){
    result += i;
    }
    return result;
}

function dice(){
    return Math.ceil(Math.random() * 6);
}

function print(a){
    console.log(a);
}

var globalVar = 0;
function increment(){
    globalVar++;
}

function printFruit(name, count){
    console.log(`${name} 과일이 ${count}개 있습니다.`);
}
printFruit('사과',10);
printFruit('귤');

function printFruit1(name,count){
    if(typeof(count) == 'undefined'){
        count = 0;
    }
    console.log(`${name} 과일이 ${count}개 있습니다.`);
}
printFruit1('귤');

function printFruit2(name,count){
    count = count ? count : 0;
    console.log(`${name} 과일이 ${count}개 있습니다.`);
}
printFruit2('귤');


