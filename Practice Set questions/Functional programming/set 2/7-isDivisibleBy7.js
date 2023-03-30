const numbers = [1, 2, 3, 21, 14, 7];
// Your code here
const isDivisibleBy7 = array => array.find(item => item % 7 === 0)

console.log(isDivisibleBy7(numbers))
// Output: 21