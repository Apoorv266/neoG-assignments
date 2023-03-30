// Your ES6 code here
const isDivisibleBy3and5 = (array) => {
    let newArr = array.filter(item => item % 3 === 0 && item % 5 === 0)
    return newArr
}


const numbers = [1, 2, 30, 4, 15];
console.log(isDivisibleBy3and5(numbers));
// Output: [30, 15]