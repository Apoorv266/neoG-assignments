// Write an ES6 function that takes an array of objects and returns the sum of all ages. [Do not use in built functions]

var array = [
    {
      name: 'Jay',
      age: 60,
    },
    {
      name: 'Gloria',
      age: 36,
    },
    {
      name: 'Manny',
      age: 16,
    },
    {
      name: 'Joe',
      age: 9,
    },
  ]

  const sumOfAges= (array) =>{
    // return array.reduce((acc, arr) => acc + arr.age, 0)

    //or

    let count = 0
    for (let i = 0; i < array.length; i++) {
    count += array[i].age
    }
    return count
  }
  
  console.log(sumOfAges(array))