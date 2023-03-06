const studentName = ["Ram", "Anjali", "Arpit", "Bhanu Kumar", "Jaya", "Ankit", "shayam"]
// Your code here
const studentNames = array => array.filter(item => item[0] === "A")

console.log(studentNames(studentName));
// Output: ["Anjali", "Arpit", "Ankit"]