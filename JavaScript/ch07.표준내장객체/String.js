const today = new Date().toISOString();
console.log(today);

//날짜추출
console.log(today.substring(0,10));
console.log(today.substring(0,today.length-14));
console.log(today.substring(0,today.indexOf('T')));
console.log(today.split('T')[0]);

//시간추출
console.log(today.substring(11,19));
console.log(today.substring(today.indexOf('T')+1,today.length-5));
console.log(today.substring(today.indexOf('T')+1,today.indexOf('.')));
console.log(new Date().toLocaleString()); //-> 정규화해서 출력됨 ㅇㅇㅇ

console.log("11111212131313131313");
//YYYY-MM-DD hh:mm:ss 형식
function twoDigit(num){
    return (num <10)? '0'+num : String(num);
}

function myDateTime(){
    let now = new Date();
    return `${now.getFullYear()}-${twoDigit(now.getMonth()+1)}-${twoDigit(now.getDate())} ` +
    `${twoDigit(now.getHours())}:${twoDigit(now.getMinutes())}:${twoDigit(now.getSeconds())}`;
}
console.log(new Date());
console.log(myDateTime());
console.log(myDateTime().substring(11)); // substring의 2번째인수 생략하면 끝까지 출력함 ㅇㅇ

let space = '       Hello?       ';
console.log(space.trim(), ':', space.trimEnd(), ':', space.trimStart());

console.log(space.trim().toUpperCase());

const sample = 'A quick brown fox jumps over the lazy dog';
console.log(sample.replace('A', 'a'));
console.log(sample.replace('o', 'O')); //변환은 가장 앞에 있는거 한개만 바뀜 ㅇㅇ

//정규표현식
console.log(sample.replace(/o/g, 'O'));

const str = 'A quick brown fox - 3 - 갈색의 재빠른 여우 the lazy dog = 5 = 게으른 개';
let eng = str.replace(/[^A-Z a-z]/g, ''); //영어, 공백만 남기고 지움
let kor = str.replace(/[^ㄱ-ㅎ ㅏ-ㅣ 가-힣]/g, ''); //한글, 공백만 남기고 지움
let num = str.replace(/[^0-9]/g, ''); //숫자만 남기고 지움
let spe = str.replace(/[^-=]/g, '');
console.log(eng);
console.log(kor);
console.log(num);
console.log(spe);


//문자열 찾기
let hello = "안녕하세요";
console.log(hello.indexOf('안녕')); //결과값이 0 이상이면 찾는 문자열이있음 ㅇㅇ
let search = "안녕";
if(hello.indexOf(search)>=0){
    console.log(`찾고싶은 단어 ${search}이/가 문장안에 있습니다.`);
}
else{
    console.log(`찾고싶은 단어 ${search}이/가 문장안에 있습니다.`);
}


