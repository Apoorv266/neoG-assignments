import React from 'react'
import { Link } from 'react-router-dom'

const VideoMain = () => {
  return (
    <div><h1>Welcome to video library.</h1>
    <h1>To browse all videos, click the below button or go to the videos page.</h1>
    <Link to={"/videos"}><button>Explore Videos</button></Link>
    </div>
    
  )
}

export default VideoMain