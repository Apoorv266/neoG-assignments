import React, { createContext, useEffect, useState } from 'react'
import { fakeFetch } from './FakeFetch'

export const booksContext = createContext()
const BookContextFunc = ({ children }) => {
    const [data, setdata] = useState([])
    const [userDetails, setuserDetails] = useState({})
    const [loader, setloader] = useState(false)

    const fetchFunc = async () => {
        setloader(true)
        const response = await fakeFetch("https://example.com/api/books")
        if (response.status === 200) {
            setdata(response.data.books)
            setuserDetails(response.data.user)
            setloader(false)
        }
    }


    const addToFavFunc = (currId) => {
        let favArray = data.map((item) => item.id === currId ? { ...item, toFav: true } : item)
        setdata(favArray)
    }

    const addToReadFunc = (currId) => {
        let favArray = data.map((item) => item.id === currId ? { ...item, toRead: true } : item)
        setdata(favArray)
    }

    useEffect(() => {
        fetchFunc()
    }, [])



    return (
        <booksContext.Provider value={{ data, userDetails , addToFavFunc,addToReadFunc, loader}}>{children}</booksContext.Provider>
    )
}

export default BookContextFunc