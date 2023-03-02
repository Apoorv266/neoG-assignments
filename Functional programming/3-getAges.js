// Your ES6 function here
const getAges = (array) =>{
    let newArr = array.map(item => item.age)
    return newArr
}


const people = [
    { name: 'Ankit', age: 25 },
    { name: 'Vinit', age: 24 },
    { name: 'Shashi', age: 29 }
  ];

  const ages = getAges(people);
  console.log(ages); // Output: [25, 24, 29]