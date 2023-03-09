const customers = [
    { name: 'John', age: 25, gender: 'Male' },
    { name: 'Jane', age: 30, gender: 'Female' },
    { name: 'Bob', age: 40, gender: 'Male' },
    { name: 'Alice', age: 35, gender: 'Female' },
];
// Your code here
const getMaleCustomers = (acc, arr) => {
    if (arr.gender === "Male") {
        acc.push(arr)
    }
    return acc
}

//DOUBT = why reduce execution is not stopping after encountering return

const maleCustomers = customers.reduce(getMaleCustomers, []);
console.log(maleCustomers);
  // Output: [{ name: 'John', age: 25, gender: 'Male' }, { name: 'Bob', age: 40, gender: 'Male' }]