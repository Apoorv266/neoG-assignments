const numbers = [1, 2, 3, 4, 5];
// Your code here
const productFunc = (acc, arr) => acc * arr

const result = numbers.reduce(productFunc, 1)
console.log(result);
// Output: 120