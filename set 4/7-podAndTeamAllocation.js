// Your ES6 code here
const podAndTeamAllocation = (obj) =>( {...obj,teamId : Math.floor(100000 + Math.random() * 900000) })



const userData = { firstName : "John", lastName: "Dee" }
console.log(podAndTeamAllocation(userData))
// {firstName: 'John', lastName: 'Dee', teamId: 667543}