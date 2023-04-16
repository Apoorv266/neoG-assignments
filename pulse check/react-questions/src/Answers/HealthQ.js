import React from 'react'

//     Create an array of objects representing employees’ sick leaves out of 50. Each object consists of: id, name and leaves. Build a React component that calculates the mean leaves of all the employees to see if the organization passes the criteria of the health.

// If the mean is above 20, display on the DOM Your employees need to take care of their health
// If the mean is below 20, display on the DOM Your employees are fit


const HealthQ = () => {

  const employeesData = [
    {
      id: 1,
      name: 'Nitin',
      leavesTaken: 36,
    },
    {
      id: 2,
      name: 'Mehak',
      leavesTaken: 25,
    },
    {
      id: 3,
      name: 'Mehul',
      leavesTaken: 16,
    },
    {
      id: 4,
      name: 'Nina',
      leavesTaken: 9,
    },
  ]

  const mean = employeesData.reduce((acc, arr) => arr.leavesTaken + acc, 0) / employeesData.length
  return (


    <div>{mean > 20 ? <h1>Your employees need to take care of their health</h1> : <h1>Your employees are fit</h1>}</div>
  )
}

export default HealthQ