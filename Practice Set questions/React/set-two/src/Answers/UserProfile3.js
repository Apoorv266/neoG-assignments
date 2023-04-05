import React from 'react'

const UserProfile3 = ({userData: {name, age, email}}) => {
  return (
    <div>name is {name} , my age is {age} and email id : {email}</div>
  )
}

export default UserProfile3