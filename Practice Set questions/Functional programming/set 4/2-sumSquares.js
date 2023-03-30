// 2. Write an ES6 function sumSquares that takes an array of numbers and returns the sum of the squares of all the numbers in the array


const numbers = [1, 2, 3, 4, 5];
// Your code here
const sqrFunc = (acc, arr) => acc +  Math.pow(arr, 2);

const result = numbers.reduce(sqrFunc, 0)
console.log(result);
 // Output: 55 