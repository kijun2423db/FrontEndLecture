// var inputYear = prompt("생일을 입력해주세요 (년)\n")
// var inputMonth = prompt("생일을 입력해주세요 (월)\n");
// var inputDate = prompt("생일을 입력해주세요 (일)\n");

let inputYear = 1996;
let inputMonth = 7;
let inputDate = 12;

let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() +1;
let date = today.getDate();
let age;

if(inputMonth > month){
    age = year - inputYear -1;
}else if(inputMonth < month){
    age = year - inputYear;
}else{
    if(inputDate < date){
        age = year - inputYear -1;
    }else{
        age = year - inputYear;
    }
}
console.log(age);