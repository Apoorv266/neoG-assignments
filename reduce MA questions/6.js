// Given an array of numbers, write a function that returns the sum of all the even numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const sumFunc = (acc, item) => {
if (item % 2 === 0 ) {
    return acc + item
}
else{
    return acc
}
}
const result = numbers.reduce(sumFunc, 0)
console.log(result)