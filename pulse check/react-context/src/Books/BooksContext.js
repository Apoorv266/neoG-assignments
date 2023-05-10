import React, { createContext, useEffect, useState } from 'react'
import { fakeFetch } from './BooksData'

export const BookContext = createContext()
const BooksContextFunc = ({ children }) => {
    const [booksData, setBooksData] = useState([])
    const [profile, setprofile] = useState({})


    const fetchFunc = async () => {
        const response = await fakeFetch("https://example.com/api/books")
        if (response.status === 200) {
            setBooksData(response.data.books)
            setprofile(response.data.user)
        }
    }

    useEffect(() => {
        fetchFunc()
    }, [])

    const handleFavFunc = (currId) =>{
        const newArr = booksData.map((item) => item.id === currId ? {...item, toFav: true}: item)
        setBooksData(newArr)
    }

    return (
        <BookContext.Provider value={{ booksData , handleFavFunc,profile}}>{children}</BookContext.Provider>
    )
}

export default BooksContextFunc