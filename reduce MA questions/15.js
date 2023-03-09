// Given an array of numbers, use the reduce function to find the maximum number in the array.
const numbers = [1, 5, 3, 8, 2];


const maxFunc = (acc, arr) => acc < arr ? arr : acc
let result = numbers.reduce(maxFunc, 0)
console.log(result)