const isEligible = ({age}, val) => age + val > 21 


const person1 = { name: 'Ajay', age: 20 };
console.log(isEligible(person1, 1)); // false
console.log(isEligible(person1, 2)); // true
