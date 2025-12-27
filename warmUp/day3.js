/*
Question 1. Find Second Largest number in an array, given arr = [4, 9, 0, 2, 8, 7, 1]
*/
let arr = [4, 9, 0, 2, 8, 7, 1];
let firstLargest = -Infinity; // 4, 9
let secondLargest = -Infinity; // 4, 8

// const firstLargestNum = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > firstLargest) {
//             firstLargest = arr[i];
//         }
//     }
//     return firstLargest;
// }

// let res = firstLargestNum(arr);
// console.log(res);

const secondLargestNum = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }
        else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

let result = secondLargestNum(arr);
console.log(result);
