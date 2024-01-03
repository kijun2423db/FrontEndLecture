/* 
    식별자(identifier)
    1. 영문자, 숫자, $, _ 사용가능
    2. 대소문자 구분
    3. 숫자로 시작 X
    4. ...
*/

let pi = 3.1415926535;
var radius = 10;
console.log(`둘레는 ${2 * pi * radius}, 면적은 ${pi * radius * radius}입니다.`);

let a = 1, str = '';
a += 2;
str += 'The quick brown fox ';
str += 'jumps over the lazy dog.';
console.log(a, '\n', str);

let x = 0, y = 0;
console.log(x++,++y);
console.log(x,y);

console.log(typeof function(){});
console.log(typeof(() => {})); //람다함수
console.log(obj.x, obj,y);

let alpha;
console.log(typeof alpha, typeof beta);
alpha = 123;
beta = 456;
