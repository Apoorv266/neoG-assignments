import React, { createContext, useEffect, useState } from 'react'
import { fakeFetch } from './FakeFetch'

export const emailContext = createContext()
const EmailContexFunc = ({ children }) => {
    const [emailData, setemailData] = useState([])

    const fetchFunc = async () => {
        const response = await fakeFetch("https://example.com/api/allemails")
        if (response.status === 200) {
            setemailData(response.data.emails)
        }
    }

    const handleReadFunc = (currId) =>{
        let newArr = emailData.map((item) => item.id === currId ? {...item, read: !item.read}: item)
        setemailData(newArr)
    }
    useEffect(() => {
        fetchFunc()
    }, [])
    return (
        <div>
            <emailContext.Provider value={{ emailData , handleReadFunc}}>
                {children}</emailContext.Provider></div>
    )
}

export default EmailContexFunc