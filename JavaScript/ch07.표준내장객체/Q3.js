// 3. 두개의 세자리수를 곱해서 나온 결과가 palindrome일때
// 가장 큰 palindrome 수와 어떤 수를 곱해서 나온 결과인가?
function isPalindrome(str){
    let reverseStr = str.split('').reverse().join('');
    return str == reverseStr;
}

let arr = [];
for(let i = 100; i<1000;i++){
    for(let k=100; k<1000;k++){
        if(isPalindrome((i*k).toString())){
            arr.push({num1 : i, num2: k, multipleNum : i*k});
        }
    }
}
arr.sort(function(a, b) {
    return a.multipleNum - b.multipleNum;
});
anw = arr.pop();
console.log(`가장큰 Palindrome 수는 ${anw.num1} 와 ${anw.num2}를 곱한값인 ${anw.multipleNum} 입니다.`);