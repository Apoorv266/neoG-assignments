// Write an ES6 function that takes an array of strings as input and concatenates them into a single string.

// Your code here
let strings = ['this', 'is', 'fun']

const concatFunc = (acc, arr) => acc+arr
const result = strings.reduce(concatFunc, "")
console.log(result); // Output: 'thisisfun'