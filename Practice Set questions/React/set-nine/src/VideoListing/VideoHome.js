import React, { useContext } from 'react'
import { Route, Routes } from 'react-router'
import AllVideos from './AllVideos'
import { Link } from 'react-router-dom'
import VideoMain from './VideoMain'
import { pizzaContext } from './VideoContext'
import LikedVideos from './LikedVideos'
import WatchLater from './WatchLater'
import SingleVideo from './SingleVideo'

const VideoHome = () => {
    const { videoData } = useContext(pizzaContext);
    const LikedNum = videoData.reduce((acc, curr) => curr.liked ? acc + 1: acc , 0)
    const WatchLtrNum = videoData.reduce((acc, curr) => curr.watchLater ? acc + 1: acc , 0)
  return (
        
    <div>
        <Link to={"/"}>Home</Link>{" "}
        <Link to={"/videos"}>Videos</Link>{" "}
        <Link to={"/liked-Videos"}>Liked Videos ({LikedNum})</Link>{" "}
        <Link to={"/watch-later"}>Watch later ({WatchLtrNum})</Link>
    <Routes>
        <Route path='/' element={<VideoMain/>}/>
        <Route path='/videos' element={<AllVideos/>}/>
        <Route path='/liked-Videos' element={<LikedVideos/>}/>
        <Route path='/watch-later' element={<WatchLater/>}/>
        <Route path='/video/:videoId' element={<SingleVideo/>}/>
    </Routes>
  
    </div>
  )
}

export default VideoHome