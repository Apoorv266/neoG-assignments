import React, { useState } from 'react'
import { fakeFetch } from '../FetchFunc'
import { useEffect } from 'react'

const OnlineUsers1 = () => {
    const [data, setdata] = useState([])

    const fetchFunc = async () =>{
        const response = await fakeFetch("https://example.com/api/users/status")
     if (response.status === 200) {
        setdata(response.data.users)
     }

    }

    useEffect(() => {
        fetchFunc()
    }, [])
    
  return (
    <div>
        <h1>Online Users</h1>

        {data.map((item) =>{
            return <h2 style={{color: item.status === "Online"? "green" : "red" }}>{item.name}-{item.status}</h2>
        })}
    </div>
  )
}

export default OnlineUsers1