import React, { createContext, useEffect, useState } from 'react'
import { fakeFetch } from './Data'

export const emailContext = createContext()
const EmailContextFunc = ({children}) => {
    const [emailData, setemailData] = useState([])
    
    const fetchData = async () =>{
        const response = await fakeFetch("https://example.com/api/allemails")
        if (response.status === 200) {
            setemailData(response.data.emails)
        }
    }
    useEffect(() => {
      fetchData()
    }, [])

    const handleReadFunc = (currId) =>{
        const array = emailData.map((item) => item.id === currId ? {...item, read: !item.read} : item)
        setemailData(array)
    }
    
  return (
    <emailContext.Provider value={{emailData,handleReadFunc}}>{children}</emailContext.Provider>
  )
}

export default EmailContextFunc