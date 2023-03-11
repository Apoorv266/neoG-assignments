// Given an array of numbers, use the reduce function to find the maximum number in the array.

const numbers = [1, 5, 3, 10, 8];

const maxFunc = (acc, arr) => {
    if (arr > acc) {
        return arr
    }
    else{
        return acc
    }
}

let result = numbers.reduce(maxFunc, numbers[0])
console.log(result)
