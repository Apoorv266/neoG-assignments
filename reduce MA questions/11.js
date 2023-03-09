// Given an array. Write a function that takes in the given array and prints only the numbers which are less than 8 and also an even number.


const arr = [2, 4, 5, 7, 9, 17, 34, 65, 90]


const result = arr.filter(item => item < 8 && item % 2 ===0)
console.log(result)


// with reduce
const checkFunc = (acc, item) => item < 8 && item % 2 ===0 ? [...acc, item] : acc 
const result2 = arr.reduce(checkFunc, [])
console.log(result2)