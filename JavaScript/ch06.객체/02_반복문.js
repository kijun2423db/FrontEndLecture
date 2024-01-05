let maria = {name : '마리아', age : 25, job: '학생'};
let name = '제임스', age = 27, job = '프로게이머';

let james = {name : name, age: age, job: job};
console.log(maria, james)

for(let key in james){
    console.log(key, ':',james[key]);
}

let james2 = {name, age, job};
