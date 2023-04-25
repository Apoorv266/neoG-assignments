import React, { createContext, useEffect, useState } from 'react'
import { fakeFetch } from './FakeFetch'

export const emailContext = createContext()
const EmailContexFunc = ({ children }) => {
    const [emailData, setemailData] = useState({emails: [], sent: []})

    const fetchFunc = async () => {
        const response = await fakeFetch("https://example.com/api/allemails")
        if (response.status === 200) {
            setemailData({...emailData, emails :response.data.emails, sent : response.data.sentEmails })
        }
    }
    
    const handleReadFunc = (currId) =>{
        let newArr = emailData.emails.map((item) => item.id === currId ? {...item, read: !item.read}: item)
        let newObj = {...emailData, emails : newArr}
        setemailData(newObj)
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