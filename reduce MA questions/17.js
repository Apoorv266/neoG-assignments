// Given an array of accects representing employees, where each accect has a name property, a department property, and a salary property, write a function that returns an accect representing the total salary of each department. The keys of the accect should be the department names, and the values should be the total salaries of all employees in that department.
const employees = [
    { name: 'Alice', department: 'Sales', salary: 50000 },
    { name: 'Bob', department: 'Sales', salary: 60000 },
    { name: 'Charlie', department: 'Marketing', salary: 55000 },
    { name: 'David', department: 'Sales', salary: 70000 },
    { name: 'Eve', department: 'Marketing', salary: 65000 },
];


const accFunc = (acc, arr) => {
    if (acc.hasOwnProperty(arr.department)) {
        acc[arr.department] = acc[arr.department]+arr.salary
    
    }
    else {
        acc[arr.department] =  0 + arr.salary
    }
    return acc
}


// short version
const accFunc2 = (acc, arr) => {
    acc[arr.department] = (acc[arr.department] || 0) + arr.salary
    return acc
}




const result = employees.reduce(accFunc, {})
const result2 = employees.reduce(accFunc2, {})
console.log(result)
console.log(result2)
  // Output: {Sales: 180000, Marketing: 120000}