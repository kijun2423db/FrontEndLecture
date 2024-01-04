// for(let i =0; i<5; i++){
//     let star = '';
//     for(let j =0; j<=i; j++){
//         star += "*";
//     }
//     console.log(star);
// }

// for(let i =0; i<5; i++){
//     let star = '';
//     for(let j =0; j<=4-i; j++){
//         star += "*";
//     }
//     console.log(star);
// }

for(let i =0; i<5; i++){
    let star = '';
    for(let k = 0; k<i; k++){
        star += " ";
    }
    for(let j =0; j<=4-i; j++){
        star += "*";
    }
    console.log(star);
}