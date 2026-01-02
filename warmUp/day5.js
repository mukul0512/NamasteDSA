/*
Question 1. Write a function that returns the count of digits in a number? Given num = 259
Output: 3
*/
// let num = -259;
// let count = 0;
// const countDigits = (num) => {
//     if(num === 0) return 1;
//     num = Math.abs(num); // to change all -ve number to +ve and if already +ve then keeping +ve, here abs stands for abstract
//     while (num > 0) {
//         num = Math.floor(num / 10);
//         count++;
//     }
//     return count;
// }

// let result = countDigits(num);
// console.log(result);

// Question 2. isPalindrome Number, given n = 121, if n is palindrome return true else false. If num is -ve then return false
// let n = 121;
// let rev = 0;
// let nCopy = n;
// const isPalindrome = (n) => {
//     if(n < 0) return false;
//     while (n > 0) {
//         let rem = n % 10;
//         rev = (10 * rev) + rem;
//         n = Math.floor(n / 10);
//     }
//     // if (rev === nCopy) {
//     //     return true;
//     // }
//     // else {
//     //     return false;
//     // }
//     return rev === nCopy;
// }
// let result = isPalindrome(n);
// console.log(result);

// Question 3. Reverse Integer
