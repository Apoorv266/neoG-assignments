// Create an array of objects representing employees in a company. Each object has the following properties: id, name, department, and salary. Write a React component that takes the array of employees as input and returns an unordered list of employees, where each list item displays the employee's name, department, and salary.

import React from 'react'

const Q4 = () => {
    const employees = [
        { id: 1, name: 'John Doe', department: 'Sales', salary: 50000 },
        { id: 2, name: 'Jane Smith', department: 'Marketing', salary: 60000 },
        { id: 3, name: 'Bob Johnson', department: 'IT', salary: 70000 },
        { id: 4, name: 'Mary Davis', department: 'Finance', salary: 80000 },
        { id: 5, name: 'Tom Lee', department: 'HR', salary: 55000 },
      ];
  return (
    <ul>
        {employees.map((item) =>(
            <li key={item.id}>{item.name}  - {item.department} -  (₹{item.salary})</li>
        ))}
    </ul>
  )
}

export default Q4