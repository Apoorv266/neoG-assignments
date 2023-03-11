// Given an array of strings, use the reduce function to create a new object that counts the frequency of each string in the array.


const arr = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple', 'cherry'];
const freqFunc = (acc, arr) =>{
    if (acc.hasOwnProperty(arr)) {
        acc[arr] = acc[arr] + 1
    }
    else{
        acc[arr] =  1
    }
    return acc
}


const result = arr.reduce(freqFunc, {})
console.log(result)