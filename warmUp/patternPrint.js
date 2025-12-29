// Star Pattern 
// 1. print star pattern if n = 4
// let n = 4;
// for(let row = 0; row < n; row++) {
//     let star = "";
//     for(let col = 0; col < n; col++) {
//         star = star + "* ";
//     }
//     console.log(star);
// }
// using function
// let n = 4;
// const squarePattern = (n) => {
//     for (let i = 0; i < n; i++) {
//         let row = "";
//         for (let j = 0; j < n; j++) {
//             row = row + "* ";
//         }
//         console.log(row);
//     }  
// }
// squarePattern(n);

// 2. print rightTriangle pattern
// let n = 4;
// const rightTriangle = (n) => {
//     for(let i = 0; i < n; i++) {
//         let row = "";
//         for(let j = 0; j < i + 1; j++) {
//             row = row + "* ";
//         }
//         console.log(row);
//     }
// }
// rightTriangle(n);

//3.  print numTriangle, n = 5
// if initialized i and j from 1
// let n = 5;
// const numTriangle = (n) => {
//     for(let i = 1; i <= n; i++) {
//         let row = "";
//         for(let j = 1; j <= i; j++) {
//             row = row + j + " ";
//         }
//         console.log(row);
//     }
// }
// numTriangle(n)
// ---------------------------------------------
// if initialized i and j from 0 
// let n = 5;
// const numTriangle = (n) => {
//     for (let i = 0; i < n; i++) {
//         let row = "";
//         for (let j = 0; j <= i; j++) {
//                row = row + (j + 1) + " ";
//         }
//         console.log(row);
//     }
// }
// numTriangle(n)

// 4. printRightNumTriangle if n = 5
// let n = 5;
// const printNumTriangle = (n) => {
//     for (let i = 0; i < n; i++) {
//         let row = "";
//         for (let j = 0; j <= i; j++) {
//                row = row + (i + 1) + " ";
//         }
//         console.log(row);
//     }
// }
// printNumTriangle(n)

// 5. Case 1
// printReverseRightTriangle for n = 5
// let n = 5;
// const printReverseRightTriangle = (n) => {
//     let row = "";
//     for (let i = n; i > 0; i--) {
//         for (let j = n; j >= i; j--) {
//             row = row + j + " ";
//         }
//         row = row + "\n";
//     }
//     return row;
// }
// let result = printReverseRightTriangle(n)
// console.log(result);
// -----------------------------------------------
// 6. case 2
// let n = 5;
// const printReverseRightTriangle = (n) => {
//     let row = "";
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n - i; j++) {
//             row = row + (j + 1) + " ";
//         }
//         row = row + "\n";
//     }
//     return row;
// }
// let result = printReverseRightTriangle(n)
// console.log(result);
// 7. star pattern of printStarReverseRightTriangle, n = 5
// let n = 5;
// const printStarReverseRightTriangle = (n) => {
//     let row = "";
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n - i; j++) {
//             row = row + "*" + " ";
//         }
//         row = row + "\n";
//     }
//     return row;
// }
// let result = printStarReverseRightTriangle(n)
// console.log(result);

// 8. printRightTriangleUlta, n=5
// let n = 5;
// const printRightTriangleUlta = (n) => {
//     let res = "";
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n - (i + 1); j++) {
//             res = res + "-" + " ";
//         }
//         for (let k = 0; k <= i; k++) {
//             res = res + "*" + " ";
//         }
//         res = res + "\n";
//     }
//     return res;
// }
// let result = printRightTriangleUlta(n);
// console.log(result);

// 9.  printBinaryRightTriangle n = 5
// let n = 5;
// const printBinaryTriangle = (n) => {
//     let res = "";
//     for (let i = 0; i < n; i++) {
//         let switchVar = 1;
//         for (let j = 0; j <= i; j++) {
//             res = res + switchVar + " ";
//             if (switchVar === 1) {
//                 switchVar = 0;
//             }
//             else {
//                 switchVar = 1;
//             }
//         }
//         res = res + "\n";
//     }
//     return res;
// }
// let result = printBinaryTriangle(n);
// console.log(result);

// 10.  printBinaryRightTriangle2 n = 5
// let n = 5;
// const printBinaryTriangle2 = (n) => {
//     let res = "";
//     let switchVar = 1;
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j <= i; j++) {
//             res = res + switchVar + " ";
//             if (switchVar === 1) {
//                 switchVar = 0;
//             }
//             else {
//                 switchVar = 1;
//             }
//         }
//         res = res + "\n";
//     }
//     return res;
// }
// let result = printBinaryTriangle2(n);
// console.log(result);