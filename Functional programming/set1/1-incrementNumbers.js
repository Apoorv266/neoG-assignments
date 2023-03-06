
// Your ES6 function here

const incrementNumbers = (array) => {
    let elems = array.map(item => item + 3)
    return elems
}

const numbers = [1, 2, 3, 4, 5];
console.log(incrementNumbers(numbers));
// Output: [4, 5, 6, 7, 8]