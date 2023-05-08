import React, { useContext } from 'react'
import { Route, Routes } from 'react-router'
import AllVideos from './AllVideos'
import { Link } from 'react-router-dom'
import VideoMain from './VideoMain'
import VideoContextFunc, { pizzaContext } from './VideoContext'
import LikedVideos from './LikedVideos'

const VideoHome = () => {
    const { videoData } = useContext(pizzaContext);
    const LikedNum = videoData.reduce((acc, curr) => curr.liked ? acc + 1: acc , 0)
  return (
        
    <div>
        <Link to={"/"}>Home</Link>{" "}
        <Link to={"/videos"}>Videos</Link>{" "}
        <Link to={"/liked-Videos"}>Liked Videos ({LikedNum})</Link>
    <Routes>
        <Route path='/' element={<VideoMain/>}/>
        <Route path='/videos' element={<AllVideos/>}/>
        <Route path='/liked-Videos' element={<LikedVideos/>}/>
    </Routes>
  
    </div>
  )
}

export default VideoHome