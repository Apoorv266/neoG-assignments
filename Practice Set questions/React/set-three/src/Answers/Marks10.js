import React from 'react'

const Marks10 = ({ studentData }) => {

    let total = studentData.reduce((acc, arr) =>arr.marks + acc
    , 0)
    console.log(total)
    return (
        <div>{total > 80? "Certification Approved" : "Certification Not Approved"}</div>
    )
}

export default Marks10