// Given an array of strings, use the reduce function to create a new string that concatenates all the strings in the array with a comma separator

//"apple, banana, cherry, date"
const arr = ['apple', 'banana', 'cherry', 'date'];

const concatFunc = (acc, arr, index) =>{
    if (index === 0) {
        return `${acc}${arr}`
    }
    else{
        return `${acc},${arr}`
    }
}

let result = arr.reduce(concatFunc, "")
console.log(result)