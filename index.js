// Programming 101 using JS

/*
- for Beginners
- easy to follow
- everything practical
- Level 0 for Namaste DSA
- https://namastedev.com/playground
*/

// function greet(name){
//     console.log(`Hello ${name}!`);
// }

// let x = "Mukul";
// greet(x);

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(10, 20));

// function multiply(a, b) {
//     console.log(a * b);  
// }
// multiply(10, 20);

// function add(a, b) {
//     let add = a + b;
//     console.log(add);
// }
// let p = 10;
// let q = 20;
// let r = 30;
// add(p, q);
// add(p, r);

// function square(x){
//     let res = x * x;
//     return res;
// }
// let value = square(5);
// console.log(value);

// function isEligibleToVote(age) {
//     if (age >= 18) {
//         console.log("You are eligible to vote");
//     } else {
//         console.log("You are not eligible to vote");
//     }
//     try {
//         if (age < 1) {
//             throw new Error("Age can't be less than 1, Invalid age");
//         }
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// let age = -1;
// isEligibleToVote(age);

// function isEligibleToVote(age) {
//   if(age < 1) {
//     throw new Error("Age can't be less than 1, Invalid age");
//     console.log("Age can't be less than 1, Invalid age");
//   }
//   else if(age < 18) {
//     console.log("You are not eligible to vote");
//   }
//   else {
//     console.log("You are eligible to vote");
//   }
// }
// let age = -1;
// isEligibleToVote(age);

// const isEvenOdd = (num) => {
//     if(num % 2 === 0) {
//         console.log("Even");
//     }
//     else {
//         console.log("Odd");
//     }
// }
// let num = 10;
// isEvenOdd(num);

/* 
Question : Check if a number is prime or not
*/

// const isPrime = (num) => {
//     if (num <= 1) {
//         console.log("Not prime");
//     }
//     else if (num === 2) {
//         console.log("Prime");
//     }
//     else {
//         for (let i = 2; i < num; i++) {
//             if (num % i === 0) {
//                 console.log("Not prime");
//                 break;
//             } else {
//                 console.log("Prime");
//                 break;
//             }
//         }
//     }
// }
// let num = 10;
// isPrime(num);

// loops 01
/*
Question : Print all the even no in the given array using for and while loop i.e. arr = [10, 5, 7, 0, 8, 3, 80];
*/

// using for loop

// let arr = [10, 5, 7, 0, 8, 3, 80];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//         console.log(arr[i]);
//     }
// }

// using while loop
// let arr = [10, 5, 7, 0, 8, 3, 80];
// let i = 0;
// while (i < arr.length) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
//     i++;
// }

/*
Question 1: Write an arrow function that searches for an element in an array and returns the index, if the element is not present then just return -1.
*/

// using for loop -> Linear Search
// let arr = [4, 2, 0, 10, 8, 30];
// let target = 10;

// const searchElement = (arr, target) => {
//     for(let i = 0; i < arr.length; i++){ // O(n)
//         if(arr[i] === target){ // O(1)
//             //return arr[i];  // -> if we wants to return the element  O(1)
//             return i; // O(1)
//         }
//     }
//     return -1; // O(1)
// }
// console.log(searchElement(arr, target));

// using for loop
// let arr = [4, 2, 0, 10, 8, 30];
// let target = 10;
// let left = 0;
// let right = arr.length - 1;
// let mid = Math.floor((left + right) / 2);

// const searchElement = (arr, target) => {
//     for(let i = 0; i < arr.length; i++){ // O(n)
//         if(arr[i] === target){ // O(1)
//             //return arr[i];  // -> if we wants to return the element  O(1)
//             return i; // O(1)
//         }
//         else if(arr[mid] < target){ // O(1)
//            left = mid + 1; // O(1) 
//         }
//         else if(arr[mid] > target){ // O(1)
//             right = mid - 1; // O(1)
//         }
//         else{
//             return -1; // O(1)
//         }
//     }
// }
// console.log(searchElement(arr, target));

// Time Complexity = O(n) + O(1) + O(1) + O(1) + O(1) = O(n)
// Space Complexity = Auxiliary Space + Input Space
// Auxiliary Space = O(1)
// Input Space = O(1)
// Space Complexity = O(1) + O(1) = O(1)

// searchElement(arr, 4); => 0
// searchElement(arr, 10); => 3
// searchElement(arr, 49); => -1

// Note :  binary search requires the array to be sorted. The example array [4, 2, 0, 10, 8, 30] is not sorted, so binary search won't work correctly on it.
// let arr = [4, 2, 0, 10, 8, 30];
// let target = 10;
// let left = 0;
// let right = arr.length - 1;
// const searchElement = (arr, target) => {
//     while(left <= right){
//         let mid = Math.floor((left + right) / 2);
//         if(arr[mid] === target){
//             //return arr[mid]; // -> if we wants to return the element  O(1)
//             return mid; // O(1)
//         }
//         else if(arr[mid] < target){
//             left = mid + 1;
//         }
//         else{
//             right = mid - 1;
//         }
//     }
//     return -1;
// }
// console.log(searchElement(arr, target));

/*
question: Write a function that returns the number of negative numbers in an array.
arr = [2, -9, 17, 0, 1, -10, -4, 8];
output: 3
*/

// let arr = [2, -9, 17, 0, 1, -10, -4, 8];
// let count = 0;
// const countNegativeNumbers = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < 0){
//             count++;
//         }
//     }
//     return count;
// }
// let result = countNegativeNumbers(arr);
// console.log(result);

/*
Question: Write a function that returns the largest number in an array.
arr = [5, 0, -7, 10, 8, 17, 1];
output: 17
*/
// let arr = [5, 0, -7, 10, 8, 17, 1];
// let largest = arr[0];
// const largestNumber = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > largest){
//             largest = arr[i];
//         }   
//     }
//     return largest;
// }
// let result = largestNumber(arr);
// console.log(result);

// let arr = [5, 0, -7, 10, 8, 17, 1];
// let largest = -Infinity;
// const largestNumber = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > largest){
//             largest = arr[i];
//         }   
//     }
//     return largest;
// }
// let result = largestNumber(arr);
// console.log(result);

/*
Question: Write a function that returns the minimum number in an array.
arr = [5, 0, -7, 10, 8, 17, 1];
output: 17
*/

// let arr = [5, 0, -7, 10, 8, 17, 1];
// let min = Infinity;
// const findMinimumNum = (arr) => {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }
// let result = findMinimumNum(arr);
// console.log(result);

