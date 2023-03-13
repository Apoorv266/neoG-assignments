// find sum of all the ages in array

const ages = [{ age: 20 }, { age: 10 }, { age: 30 }];

const sumFunc = (acc, arr) =>arr.age + acc
const result = ages.reduce(sumFunc, 0)
console.log(result)