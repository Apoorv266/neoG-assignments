import React, { createContext, useEffect, useState } from 'react'
import { fakeFetch } from './VideoData'

export const pizzaContext = createContext()
const VideoContextFunc = ({ children }) => {
    const [videoData, setvideoData] = useState([])
    const [loader, setloader] = useState(false)

    const fetchData = async () => {
        setloader(true)
        const response = await fakeFetch("https://example.com/api/videos")
        if (response.status === 200) {
            setvideoData(response.data.videos)
            setloader(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleLikeFunc = (currId) =>{
        let newArray = videoData.map((item) => item.id === currId ? item.hasOwnProperty("liked") ?{...item , liked : !item.liked} :  {...item , liked : true}: item)
        setvideoData(newArray)
    }


    const handleLaterFunc = (currId) =>{
        let newArray = videoData.map((item) => item.id === currId ? item.hasOwnProperty("watchLater") ?{...item , watchLater : !item.watchLater} :  {...item , watchLater : true}: item)
        setvideoData(newArray)
    }
    return (
        <pizzaContext.Provider value={{videoData, handleLikeFunc, handleLaterFunc, loader}}>{children}</pizzaContext.Provider>
    )
}

export default VideoContextFunc