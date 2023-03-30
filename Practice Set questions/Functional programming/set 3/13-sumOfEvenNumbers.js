const numbers = [12, 23, 4, 2, 11, 21] 
// Your code here
const sumOfEvenNumbers = (acc,arr) => arr % 2 === 0 ? acc + arr : acc
 

let result = numbers.reduce(sumOfEvenNumbers, 0)
console.log(result)
// Output: 18