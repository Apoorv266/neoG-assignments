// Given an array of numbers, write a function that returns the sum of all the  numbers at even indices.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const sumFunc = (acc, item, index) => (index % 2 === 0 ? acc + item : acc)
const result = numbers.reduce(sumFunc, 0)
console.log(result)