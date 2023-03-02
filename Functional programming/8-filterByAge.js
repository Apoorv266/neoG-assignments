// Your ES6 code here
const filterByAge = (array) =>{
let newArr = array.filter(item => item.age > 30)
return newArr
}


const people = [
    { name: 'Rahul', age: 25 },
    { name: 'Raj', age: 35 },
    { name: 'Vijay', age: 45 }
  ];
  
  console.log(filterByAge(people)); 
  // Output: [{ name: 'Raj', age: 35 }, { name: 'Vijay', age: 45 }]