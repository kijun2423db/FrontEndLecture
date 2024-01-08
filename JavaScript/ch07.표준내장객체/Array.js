let fruits = ['apple', 'banana', 'cherry'];
let cars = new Array('Audi', 'Benz', 'BMW');

console.log(cars);
console.log(cars.length);

let newFruits = fruits.concat('mango','orange');
console.log(fruits);
console.log(newFruits);

console.log(`내가 타고싶은 차는 ${cars.join('----')} 입니다.`);

console.log(cars.pop());
console.log(cars);

cars.push('Volkswagen');
cars.push('Hyundai');
console.log(cars);

cars.reverse();
console.log(cars);

let numbers = [34, 56, 12, 20, 64, 46, 72];

numbers.sort();
cars.sort();
console.log(cars);

numbers.sort(function(a,b){
    return b-a;
});
cars.sort(function(a,b){
    if(a < b){
        return 1;
    }if(a>b){
        return -1;
    }
    return 0;
});

console.log(numbers);
console.log(cars);

let person = [ 
    {name : 'james', age:27, job : 'programmer'},
    {name : 'maria', age:24, job : 'student'},
    {name : 'brian', age:30, job : 'teacher'}
];
//알파벳 오름차순
person.sort(function(a,b){
    if(a.name>b.name){
        return 1;
    }if(a.name<b.name){
        return -1;
    }
    return 0;
});

//나이의 내림차순으로 정렬
person.sort((a,b) => (b.age - a.age));

//job 내림차순
person.sort(function(a,b){
    if(a.job>b.job){
        return -1;
    }if(a.job<b.job){
        return 1;
    }
    return 0;
});
console.log(person);

//slice
console.log(fruits.slice(0,2));
console.log(fruits);

//문자열 거꾸로
let str = 'Hello, Javscript';
console.log(str.split('').reverse().join(""));

//어떤 문자열이 회문 (palindrome)인가?
function isPalindrome(str){
    let reverseStr = str.split('').reverse().join('');
    return str == reverseStr;
}

console.log(isPalindrome('우영우'));
console.log(isPalindrome('소주 만병만 주소'));
console.log(isPalindrome('바부'));
