// Your ES6 code here
const convertEvenToOdd = (array) => {
    let temp 
    for (let i = 1; i < array.length; i = i + 2) {
        // temp = array[i] + 1
        array[i] = array[i] + 1
    }
    return array
}

var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(convertEvenToOdd(numArr));
// [1, 3, 3, 5, 5, 7, 7, 9, 9]