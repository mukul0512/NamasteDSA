/*
Question 1. Find Second Largest number in an array, given arr = [4, 9, 0, 2, 8, 7, 1]
*/
// let arr = [4, 9, 0, 2, 8, 7, 1];
// let arr = [4]; // only one element
// let arr = []; // empty array
// let arr = [-4, -9, 0, -2, -8, -7, -1]; // negative
// let arr = [4, 9, 0, 2, 8, 7, 1, 10, 10]; // if duplicate counts as once
// let firstLargest = -Infinity; // 4, 9
// let secondLargest = -Infinity; // 4, 8

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

// const secondLargestNum = (arr) => {
//     if (arr.length < 2) { // in case if arr have only one element
//         return null;
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > firstLargest) {
//             secondLargest = firstLargest;
//             firstLargest = arr[i];
//         }
//         // else if (arr[i] > secondLargest) {
//         //     secondLargest = arr[i];
//         // }
//         else if (arr[i] > secondLargest && arr[i] != firstLargest) { // in case arr have duplicates element
//             secondLargest = arr[i];
//         }
//     }
//     return secondLargest;
// }

// let result = secondLargestNum(arr);
// console.log(result);

// -----------------------------------------------------------

// Day 4 -> Loop in Loop
// Example 1 ->
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log("i=" + i + " j=" + j);
//     }
// }

// Example 2 ->
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < i; j++) {
//         console.log(i, j);
//     }
// }

// Example 3 ->
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j <= i; j++) {
//         console.log(i, j);
//     }
// }

// Example 4 -> 
// for (let i = 0; i < 3; i++) {
//     for (let j = i; j > 0; j--) {
//         console.log(i, j);
//     }
// }

// Example 5 ->
// for (let i = 0; i < 3; i++) {
//     for (let j = i; j >= 0; j--) {
//         console.log(i, j);
//     }
// }

// Example 6 ->
// for (let i = 5; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//         console.log(i, j);
//     }
// }