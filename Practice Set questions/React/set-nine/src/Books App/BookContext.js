import React, { createContext, useEffect, useState } from 'react'
import { fakeFetch } from './FakeFetch'

export const booksContext = createContext()
const BookContextFunc = ({children}) => {
    const [data, setdata] = useState([])
    const [userDetails, setuserDetails] = useState({})

    const fetchFunc = async () => {
        const response = await fakeFetch("https://example.com/api/books")
        if (response.status === 200) {
            setdata(response.data.books)
            setuserDetails(response.data.user)
        }
    }

    useEffect(() => {
        fetchFunc()
    }, [])
    
    return (
        <booksContext.Provider value={{data, userDetails}}>{children}</booksContext.Provider>
    )
}

export default BookContextFunc