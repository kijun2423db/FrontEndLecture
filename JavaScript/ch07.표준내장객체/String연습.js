let numStr = '';
for (let i = 1; i<=1000; i++){
    numStr += i;
}
console.log(numStr.replace(/[^1]/g,'').length);

for(let i = 0; i<=9; i++){
    let pattern = new RegExp('[^' + i + ']','g');
    count = numStr.replace(pattern, '').length;
    console.log(`${i}: ${count}`);
}
