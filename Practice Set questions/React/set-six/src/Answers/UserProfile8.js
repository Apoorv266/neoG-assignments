import React, { useEffect, useState } from 'react'

const UserProfile8 = () => {
    const fakeFetch = (url) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (url === 'https://example.com/api/profile') {
              resolve({
                status: 200,
                message: 'Success',
                data: {
                  profiles: {
                    name: 'John',
                    age: 30,
                    gender: 'male',
                    email: 'john@example.com',
                    occupation: 'Software Engineer',
                  },
                },
              })
            } else {
              reject({
                status: 404,
                message: 'User Profile not found.',
              })
            }
          }, 2000)
        })
      }

     const [data, setdata] = useState({})
     const [userInput, setuserInput] = useState("")
    
     const fetchFunc = async () => {
        const response = await fakeFetch("https://example.com/api/profile")
        if (response.status === 200) {
            setdata(response.data.profiles)
        }
    }

    useEffect(() => {
        fetchFunc()
    }, [])

    const handleClick = () =>{
      setdata({...data, name : userInput})
    }

  return (
    <div>
        { Object.keys(data).length !== 0 && (
          <div>
        <h1>Profiles</h1>
        <p><strong>Name : </strong>{data.name}</p>
        <p><strong>Email : </strong>{data.email}</p>
        <p><strong>Age : </strong>{data.age}</p>
        <p><strong>Gender : </strong>{data.gender}</p>
        <p><strong>occupation : </strong>{data.occupation}</p>
        <input type='text' value={userInput} onChange={(e)=>setuserInput(e.target.value)}/>
        <button onClick={handleClick}>Update Name</button>
        </div>)}
    </div>
  )
}

export default UserProfile8