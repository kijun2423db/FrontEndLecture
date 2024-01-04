var hour = 0;
var min = 25;

if(min >= 45){
    console.log(`hour: ${hour}, min: ${min-45}`);
}else{
    if(hour == 0){
        console.log(`hour: 23, min: ${min +15}`);
    }
    else{
        console.log(`hour: ${hour-1}, min: ${min +15}`);
    }
}