// Write an ES6 function combineObjects with the least amount of characters which merges two 
// objects into one.

const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
const combineObjects = (obj1, obj2) => ({...obj1, ...obj2})
console.log(combineObjects(obj1, obj2))