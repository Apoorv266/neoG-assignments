// Create an array of objects representing students in a class. Each object has the following properties: id, name, grade, and attendance. Write a React component that takes the array of students as input and generates an ordered list of students, where each list item displays the student's name, grade, and attendance.

import React from 'react'
const students = [
    { id: 1, name: 'John Doe', grade: 9, attendance: 0.9 },
    { id: 2, name: 'Jane Smith', grade: 10, attendance: 0.95 },
    { id: 3, name: 'Bob Johnson', grade: 9, attendance: 0.85 },
    { id: 4, name: 'Mary Davis', grade: 11, attendance: 0.92 },
    { id: 5, name: 'Tom Lee', grade: 10, attendance: 0.88 },
  ];
const Q7 = () => {
  return (
    <ol>
        {students.map((item) => (
            <li key={item.id}><i>{item.name}</i> - <b>Grade:</b> {item.grade} - <b>Attendance : </b>{item.attendance}</li>
        ))}
    </ol>
  )
}

export default Q7