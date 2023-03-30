import React from 'react'

const EmployeeCard  = ({name, designation, workExp}) => {
  return (
    <div>
      <h1>Employee Data</h1>
      <p>name : {name}</p>
      <p><span style={{color: "green"}}>Designation :</span> {designation}</p>
      <p><span  style={{color: "blue"}}>Work Experience :</span> {workExp}</p>
    </div>
  )
}

export default EmployeeCard 