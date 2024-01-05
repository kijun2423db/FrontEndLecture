let sampleArray = [43,17,25,36,98,73];

function sumArray(arr){
    let sum = 0;
    for(num of arr){
        sum += num;
    }
    return sum;
}

function maxArray(arr){
    let maxNum = arr[0];
    for(num of arr){
        if(maxNum < num){
            maxNum = num;
        }
    }
    return maxNum;
}

function avgArray(arr){
    let avg =0;
    let sum =0;
    for (num of arr){
        sum += num;
    }
    avg = sum / arr.length;
    return avg;
}

function sumOfSquare(arr){
    let sum = 0;
    for(num of arr){
        sum += num**2;
    }
    return sum;
}

console.log(sumArray(sampleArray));
console.log(maxArray(sampleArray));
console.log(avgArray(sampleArray));
console.log(sumOfSquare(sampleArray));
