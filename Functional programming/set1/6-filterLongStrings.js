// Your ES6 function here
const filterLongStrings = (array) => {
    let newArr = array.filter(item => item.length > 5)
    return newArr
}


const fruits = ['apple', 'banana', 'cherry', 'watermelon', 'pineapple'];
console.log(filterLongStrings(fruits));
// Output: ["banana", "cherry", "watermelon", "pineapple"]