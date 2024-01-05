//콜백함수 
function callFiveTimes(callback){
    for (let i =0; i<5; i++){
        callback();
    }
}

// 익명함수
const cb = function(){
    console.log(`함수가 호출되었습니다.`);
}

callFiveTimes(cb);

//함수를 호출할 때 익명 함수를 만들어 주는 것이 일반적
callFiveTimes(function(){
    console.log(`함수가 호출되었습니다.`);
});

callFiveTimes(() => {
    console.log(`함수가 호출되었습니다.`);
});

