// Given an array of strings, write a function that returns the total number of characters in all the strings that start with the letter "A".
const strings = ['Apple', 'Aardvark', 'Banana', 'Cat'];
// Output: 13

const lenSumFunc = (acc, item) => {
    if (item.charAt(0) === "A") {
        return acc + item.length
    }
    else {
        return acc
    }
}

let result = strings.reduce(lenSumFunc, 0)
console.log(result)