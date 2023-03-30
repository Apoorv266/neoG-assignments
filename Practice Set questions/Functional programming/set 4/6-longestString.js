const strings = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];
// Your code here


const longFunc = (acc, arr)=>arr.length > acc.length ? arr : acc


const result = strings.reduce(longFunc, "")
console.log(result); 
// Output: 'Haule Haule'