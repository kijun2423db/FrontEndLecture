// 2. 디지털 시계, 00:00 ~ 23:59
// 하루동안 3이 표시되는 시간은 몇초인가?
let cnt =0;
for(let i =0;i <=23; i++){
    if(i.toString().indexOf('3')>=0){
        cnt += 3600;
        continue;
    }
    for(let k=0; k<= 59; k++){
        if(k.toString().indexOf('3')>=0){
            cnt += 60;
        }
    }
}
console.log(cnt);

