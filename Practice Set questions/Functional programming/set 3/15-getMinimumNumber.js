const numbers = [10, 5, 8, 3, 50, 100];

// Your code here
const getMinimumNumber = (acc, item) => item < acc ? acc = item : acc
    

let result = numbers.reduce(getMinimumNumber, numbers[0])
console.log(result); 
// Output: 3