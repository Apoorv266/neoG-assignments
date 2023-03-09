// Given an array of objects representing people, use the reduce function to find the average age of all the people.

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'Dave', age: 40 }
];

const addFunc = (acc, arr) => acc + arr.age

let result = people.reduce(addFunc, 0)/people.length
console.log(result)
