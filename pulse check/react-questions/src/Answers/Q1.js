import React from 'react'
// Build a React component to calculate and display the total salary expense of the company. Total Salary Expense: totalSalary
const Q1 = () => {
    const employees = [
        {
          name: 'Jack Smith',
          level: 2,
          dept: 'Tech',
          designation: 'Manager',
          salary: 24000,
        },
        {
          name: 'Mary Robbins',
          level: 3,
          dept: 'Fin',
          designation: 'Manager',
          salary: 28000,
        },
        {
          name: 'Steve Williams',
          level: 4,
          dept: 'Ops',
          designation: 'President',
          salary: 35000,
        },
        {
          name: 'Bob Andrews',
          level: 1,
          dept: 'Fin',
          designation: 'Trainee',
          salary: 16500,
        },
        {
          name: 'Dave Martin',
          level: 2,
          dept: 'Fin',
          designation: 'Manager',
          salary: 21700,
        },
        {
          name: 'Julia Clarke',
          level: 3,
          dept: 'Ops',
          designation: 'Manager',
          salary: 26900,
        },
        {
          name: 'Kathy Jones',
          level: 4,
          dept: 'Tech',
          designation: 'President',
          salary: 42500,
        },
        {
          name: 'Tom Bresnan',
          level: 2,
          dept: 'Tech',
          designation: 'Manager',
          salary: 22200,
        },
      ]
  return (
    <div>
       Total Salary Expense:Rs. {employees.reduce((acc, arr)=>acc + arr.salary, 0)}
    </div>
  )
}

export default Q1