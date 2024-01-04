let person = ['James', 27, '남자', '프로그래머', 175.3];


console.log(person);
console.log(person.length);
console.log(typeof person); // array 는 object의 한 형태

for(let i=0;i<person.length; i++){
    console.log(person[i]);
}
for(let i=person.length-1;i>=0; i--){
    console.log(person[i]);
}

for(let item of person){
     console.log(item);
}