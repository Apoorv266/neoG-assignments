import React from 'react'

const StudentMarks7 = ({student}) => {

    function studentFuncTotal(student) {
        return student.english + student.maths + student.computers;
    }

    function gradeFunc(student) {
        let totalMarks = studentFuncTotal(student)
        if (totalMarks >= 225) {
            return 'A';
          } else if (totalMarks >= 180) {
            return 'B';
          } else if (totalMarks >= 150) {
            return 'C';
          } else {
            return 'D';
          }
    }
    
  return (
    <div>
        <h2>{student.name}</h2>
      <p>English: {student.english}</p>
      <p>Maths: {student.maths}</p>
      <p>Computers: {student.computers}</p>
      <p>Total Marks: {studentFuncTotal(student)}</p>
      <p>Grade: {gradeFunc(student)}</p>
    </div>
  )
}

export default StudentMarks7