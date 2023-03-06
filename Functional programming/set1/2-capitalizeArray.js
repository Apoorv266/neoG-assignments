// Your ES6 function here
const capitalizeArray = (array) => {
    let newArr = array.map(item => item.toUpperCase())
    return newArr
}


const myArray = ['apple', 'banana', 'cherry'];
console.log(capitalizeArray(myArray));
// Output: ["APPLE", "BANANA", "CHERRY"]