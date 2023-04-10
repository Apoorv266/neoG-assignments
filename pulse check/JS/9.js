// Destructure the following code to get the desired outputs. Avoid using in-built methods.

// Use only nested destructuring and least amount of characters.

const user = {
    name: "John",
    age: 30,
    hobbies: ["reading", "painting", "playing guitar"],
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001",
        coordinates: [40.7128, -74.0060]
    }
}

// Your output should look like:
const { name, hobbies: [hobby1, , hobby3],address: {street: address, coordinates: [latitude , longitude]}} = user

console.log(name) // John
console.log(hobby1) // reading
console.log(hobby3) // playing guitar 
console.log(address) // 123 Main St
console.log(`${address}, at ${latitude} x ${longitude}`);