// Write a function that uses destructuring to extract the first two elements from an array, and returns them in an object with keys 'first' and 'second'.
// Output should look like:
const pickFirstAndSecond = ([item1, item2]) =>{
    return {first: item1, second: item2}
}


console.log(pickFirstAndSecond(['orange', 'banana', 'apple']))
// {first: 'orange', second: 'banana'}

console.log(pickFirstAndSecond(['red', 'blue', 'green']))
// {first: 'red', second: 'blue'}