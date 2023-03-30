const strings = ['Hello', ' ', 'world', '!'];
// Your code here
const concatenateStrings = (acc, item) => `${acc}${item}`

let result = strings.reduce(concatenateStrings, "")
console.log(result); 
// Output: "Hello world!"