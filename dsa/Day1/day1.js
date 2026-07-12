// Day 1 

/*
0. Create a function that can add 2 numbers?
*/

const addTwoNumbers = (n1, n2) => {
    let sum = n1 + n2;
    // return sum;
    console.log("The sum is: " + sum);
}
// console.log(addTwoNumbers(num1, num2));
addTwoNumbers(5, 10);

/*
1. Write a function to check if a number is prime or not?
*/

const isPrime = (num) => {
    if (num <= 1) {
        console.log(num + " is not a prime number");
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log(num + " is not a prime number");
            return false;
        }
    }
    console.log(num + " is a prime number");
    return true;
}
isPrime(8);
// ----------------------------------------------------------
const isPrimeNum = (num) => {
    if (num <= 1) {
        console.log(num + " is not a prime number");
    }
    else if (num === 2) {
        console.log(num + " is a prime number");
    }
    else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                console.log(num + " is not a prime number");
                break;
            }
            else {
                console.log(num + " is a prime number");
                break;
            }
        }
    }
}

isPrimeNum(9);

/* 
2. Write a function to print all the even no in the given array using for and while loop i.e. arr = [10, 5, 7, 0, 8, 3, 80];
*/

const printEvenNumbers = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }
}
printEvenNumbers([10, 5, 7, 0, 8, 3, 80]);

/*
3. Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1? Given array is arr = [4, 2, 0, 10, 8, 30] and target = 10 
*/

const searchElement = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log("Element found at index: " + i);
            return i;
        }
    }
    console.log("Element not found, returning -1");
    return -1;
}
searchElement([4, 2, 0, 10, 8, 30], 10);

/*
4. Write a function that returns the number of negative numbers in an array? arr = [2, -9, 17, 0, 1, -10, -4, 8] and output = 3
*/

const countNegativeNumbers = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    console.log("Number of negative numbers: " + count);
    return count;
}
countNegativeNumbers([2, -9, 17, 0, 1, -10, -4, 8]);

/*
5. Write a function that returns the largest number in an array. arr = [5, 0, -7, 10, 8, 17, 1] and output = 17
*/

const findLargestNumber = (arr) => {
    let largest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    console.log("The largest number is: " + largest);
    return largest;
}
findLargestNumber([5, 0, -7, 10, 8, 17, 1]);

/*
6. Write a function that returns the smallest number in an array. arr = [5, 0, -7, 10, 8, 17, 1] and output = -7
*/

const findSmallestNumber = (arr) => {
    let smallest = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    console.log("The smallest number is: " + smallest);
    return smallest;
}
findSmallestNumber([5, 0, -7, 10, 8, 17, 1]);