// Day 1 & 2

/*
1. Write a function to check if a number is prime or not?
*/

const isPrime = (num) => {
    if (num <= 1) {
        console.log("Not Prime");
    }
    else if (num === 2) {
        console.log("Prime");
    }
    else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                console.log("Not Prime");
                break;
            }
            else {
                console.log("Prime");
                break;
            }
        }
    }
}
isPrime(11);


/*
2. Wite a function to print all the even no in the given array using for and while loop i.e.
 arr = [10, 5, 7, 0, 8, 3, 80];
*/
// using for loop
let arr = [10, 5, 7, 0, 8, 3, 80];
let evens = [];
let idx = 0;
const printEvenNum = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            // evens.push(arr[i]);
            evens[idx] = arr[i];
            idx++;
        }
    }
    return evens;
}
let res = printEvenNum(arr);
console.log(res);

// using while loop

let arr1 = [10, 5, 7, 0, 8, 3, 80];
let evenNumbers = [];
let idx1 = 0;
let i = 0;
const printAllEvenNumbers = (arr1) => {
    while (i < arr1.length) {
        if (arr1[i] % 2 === 0) {
            evenNumbers[idx1] = arr1[i];
            idx1++;
        }
        i++;
    }
    return evenNumbers;
}

let res1 = printAllEvenNumbers(arr1);
console.log(res1);



/*
3.Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1? Given array is 
arr = [4, 2, 0, 10, 8, 30] and target = 10
*/

let givenArr = [4, 2, 0, 10, 8, 30];
let target = 10;
const searchElement = (givenArr, target) => {
    for (let i = 0; i < givenArr.length; i++) {
        if (givenArr[i] === target) {
            return i;
        }
    }
    return -1;
}
let finalRes = searchElement(givenArr, target);
console.log(finalRes);


/*
4. Write a function that returns the number of negative numbers in an array? 
arr = [2, -9, 17, 0, 1, -10, -4, 8] and output = 3
*/

let arr2 = [2, -9, 17, 0, 1, -10, -4, 8];
let count = 0;
const negativeNumbers = (arr2) => {
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] < 0) {
            count++;
        }
    }
    return count;
}
let output = negativeNumbers(arr2);
console.log(output);


/*
5. Write a function that returns the largest number in an array.
 arr = [5, 0, -7, 10, 8, 17, 1] and output = 17
*/

let arr3 = [5, 0, -7, 10, 8, 17, 1];
let lrgNum = -Infinity;
const largestNumber = (arr3) => {
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] > lrgNum) {
            lrgNum = arr3[i];
        }
    }
    return lrgNum;
}

let result = largestNumber(arr3);
console.log(result);


/*
6. Write a function that returns the smallest number in an array. 
arr = [5, 0, -7, 10, 8, 17, 1] and output = -7
*/

let arr4 = [5, 0, -7, 10, 8, 17, 1];
let smallest = Infinity;
const smallestNumber = (arr4) => {
    for (let i = 0; i < arr4.length; i++) {
        if (arr4[i] < smallest) {
            smallest = arr4[i];
        }
    }
    return smallest;
}
let finalOut = smallestNumber(arr4);
console.log(finalOut);
