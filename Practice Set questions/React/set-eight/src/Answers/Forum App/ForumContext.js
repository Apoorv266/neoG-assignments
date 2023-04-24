import React, { createContext, useEffect, useState } from 'react'
import { fakeFetch } from './forumFetch'

export const ForumContext = createContext()

const ForumContextFunc = ({ children }) => {
    const [forumData, setforumData] = useState([])

    const fetchFunc = async () => {
        const response = await fakeFetch("https://example.com/api/questions")
        if (response.status === 200) {
            setforumData(response.data.questions)
        }
    }

    useEffect(() => {
        fetchFunc()
    }, [])

    return (
        <div>
            <ForumContext.Provider value={{ forumData }}>
                {children}
            </ForumContext.Provider>
        </div>
    )
}

export default ForumContextFunc