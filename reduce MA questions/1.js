// Given an array of numbers, write a function that returns the sum of all the even numbers.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// Output: 20
const evenFunc = (arr) => arr.reduce(acc, arr) => acc % 2 === 2 ? acc + arr : ""