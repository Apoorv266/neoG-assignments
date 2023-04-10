import React from 'react'
// QUESTION 1
// Given a student object with student name and the marks for english, maths and computers. If the total marks of a student is >= 225, the grade is A, >=180 the grade is B, >=150 the grade is C, otherwise the grade is D. Build a React Component that takes the student object as props and uses it to show all the students details, total marks and grade on the DOM


const Q4 = () => {
    const student = {
        name: 'John Doe',
        english: 90,
        maths: 80,
        computers: 10,
    }

    const totalSum = (obj) => {
        return (obj.english + obj.maths + obj.computers)
    }

    const gradeFunc = (obj) => {
        let totalMarks = totalSum(obj)
        if (totalMarks >= 225) {
            return "A"
        } else if (totalMarks >= 180) {
            return "B"
        }
        else if (totalMarks >= 150) {
            return "C"
        } else {
            return "D"
        }
    }
    return (
        <div>
            <p>{student.name}</p>
            <p>total marks : {totalSum(student)}</p>
            <p>grade : {gradeFunc(student)}</p>
        </div>
    )
}

export default Q4