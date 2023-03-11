// Given an array of arrays, use the reduce function to flatten the array into a single array.

const arr = [[1, 2], [3, 4], [5, 6]];


const flatFunc = (acc, arr) =>{
    return [...acc, ...arr]
}
let result = arr.reduce(flatFunc, [])
console.log(result)