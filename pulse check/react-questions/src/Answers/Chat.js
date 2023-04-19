import React, { useEffect, useState } from 'react'
import { fakeFetch } from './FetchCall'

const Chat = () => {
    const [data, setdata] = useState([])

    const apiCallFunc = async () => {
        try {
            const response = await fakeFetch("https://example.com/api/userchat")
            if (response.status === 200) {
                setdata(response.data)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleClick = (index) => {
        setdata(data.filter((item, currIndex) => currIndex !== index))
    }

    useEffect(() => {
        apiCallFunc()
    }, [])

    return (
        <div>
            {data.length === 0 ? <h1>Loading Chats...</h1> : (
                <div>
                    <h1>User Chat Component</h1>
                    {data.map((item, index) => {
                        return (
                            <div key={index}>
                                <b>{item.name}'s Chat </b>
                                <button onClick={() => handleClick(index)}>Delete</button>
                                {
                                    item.messages.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <p>{item.from}'s message:{item.message}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Chat