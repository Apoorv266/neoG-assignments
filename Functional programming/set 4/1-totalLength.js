// Given an array, write an ES6 function that returns the total length of all the strings in an array.


const strings = ["apple", "banana", "cherry", "date", "blueberry"];
// Your code here
const addLen = (acc, arr) => acc+arr.length

const result = strings.reduce(addLen, 0)
console.log(result);
// Output: 30