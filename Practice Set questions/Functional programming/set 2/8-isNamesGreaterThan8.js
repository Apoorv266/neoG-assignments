const names = ["Mohan", "Anjali", "Geetanjali", "Ankit", "Bhanu Kumar", "Ramakrishnan",  "shayam"]
// Your code here
const isNamesGreaterThan8 = array => array.find(item => item.length > 8)

console.log(isNamesGreaterThan8(names));
// Output: "Geetanjali"