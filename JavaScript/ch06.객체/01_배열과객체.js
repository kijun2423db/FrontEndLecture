let fruitArray = ['감','귤', '밤','배'];
console.log(typeof(fruitArray));

let fruitObject = {0: '감', 1: '귤', 2: '밤', 3: '배'};
console.log(fruitArray[0], fruitArray[1]);

//객체: 자료구조로서 객체는 파이썬의 딕셔너리, 자바의 맵과 유사함
let personArray = ['James', 27, '남자','프로그래머', 175.3];
let personInfo = {name: 'James', age: 27,gender: '남자',job: '프로그래머',height: 175.3};
console.log(personInfo)

let car = {manufacturer :'현대자동차', model: 'casper', color : '카키색'}
console.log(car)

console.log(personInfo['name']);
console.log(personInfo.name);

let key = 'job';
console.log(personInfo[key]);