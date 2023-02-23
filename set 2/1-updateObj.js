let person = {
    name: "Rohan",
    age: 20
}

// directly changing
person.age = 35
// by creating new object
let newObj = { ...person, age: 35 }

console.log(person); // Output: 35
console.log(newObj); // Output: 35