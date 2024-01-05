let myYear = 1996;
let myMonth = 7;
let myDate = 12;
let today = new Date();

let year = today.getFullYear();
let month = today.getMonth() +1;
let date = today.getDate();
let age;

if(myMonth > month){
    age = year - myYear -1;
}else if(myMonth < month){
    age = year - myYear;
}else{
    if(myDate < date){
        age = year - myYear -1;
    }else{
        age = year - myYear;
    }
}
console.log(age);

function isDivisible(year) {
    let str_year = year.toString();
    let length = str_year.length;
    let str1 = str_year[length - 2];
    let str2 = str_year[length - 1];
    let year_bot = (year.toString()[length - 2]) + year.toString()[length - 1];
    let year_bot_num = parseInt(year_bot);

    if ((year + 1) % year_bot_num == 0){
        console.log('Good');
    }else{
        console.log('Bye');
    }
}

year = 2023;
while (year <=2040){
    isDivisible(year);
    year ++;
}

function sum_difference(arr){
    let sum1 = 0;
    let sum2 = 0;
    let big = 0;
    let small = 0;
    for(num of arr){
        sum1 += num;
        sum2 += num**2;
    }
    big = Math.max(sum1**2, sum2);
    small = Math.min(sum1**2, sum2);
    return big - small;
}

arr = [24, 67, 45, 97, 43];
console.log(sum_difference(arr));
