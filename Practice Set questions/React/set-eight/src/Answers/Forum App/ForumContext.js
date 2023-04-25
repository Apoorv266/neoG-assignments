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


    const handleUpvote = (currId, currIndex) => {
        let answerObj = forumData[currIndex]
        let newArr = [...forumData]
        if (currIndex !== 0) {
            newArr.splice(currIndex, 1)
            newArr.splice(currIndex - 1, 0, answerObj)
            setforumData(newArr)
        }else{
            setforumData(newArr)
        }
    }


    const handleDownvote = (currId, currIndex) =>{
        let answerObj = forumData[currIndex]
        let newArr = [...forumData]
        if (currIndex !== newArr.length - 1) {
            newArr.splice(currIndex, 1)
            newArr.splice(currIndex + 1, 0, answerObj)
            setforumData(newArr)
        }else{
            setforumData(newArr)
        }
    }

    return (
        <div>
            <ForumContext.Provider value={{ forumData, handleUpvote, handleDownvote }}>
                {children}
            </ForumContext.Provider>
        </div>
    )
}

export default ForumContextFunc