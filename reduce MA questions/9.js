// Given an array of numbers, write a function that returns the sum of the cubes of all odd numbers in the array. 
const numbers = [1, 2, 3, 4, 5];

const cubeFunc = (acc, item) =>{
    if (item % 2 !== 0) {
        let sum = Math.pow(item, 3)
        return acc + sum
    }
    else{
        return acc
    }
}
const result = numbers.reduce(cubeFunc, 0)
console.log(result);