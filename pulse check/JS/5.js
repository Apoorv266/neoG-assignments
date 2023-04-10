// Write an ES6 function that takes an array of objects and a property name and returns a new array with only the values of that property. 
// Avoid using in-built methods.

const getValues = (array, value)=>{
    let array1 = []
    for (let i = 0; i < array.length; i++) {
        array1[array1.length] = array[i][value];
    }
    return array1
}

console.log(
  getValues(
    [
      { name: 'John', age: 21 },
      { name: 'Mary', age: 22 },
      { name: 'Peter', age: 23 },
    ],
    'age',
  ),
) // [21, 22, 23]