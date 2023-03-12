// Write an ES6 function that takes an array of objects with name and age property, and returns the name of the oldest person.


const people = [
    { name: 'Jeena', age: 25 },
    { name: 'Priya', age: 30 },
    { name: 'Naina', age: 45 }
]

// Your code here
let name = ""
const maxAgeFunc = (acc, arr) => arr.age > acc.age ? arr : acc

const result = people.reduce(maxAgeFunc)
console.log(result.name);
// Output: 'Naina'