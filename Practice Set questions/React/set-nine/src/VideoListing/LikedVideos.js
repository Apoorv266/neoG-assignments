import React, { useContext } from 'react'
import { pizzaContext } from './VideoContext';
import RenderVideo from './RenderVideo';

const LikedVideos = () => {
    const { videoData } = useContext(pizzaContext);
    let LikedVideosArray = videoData.filter(item => item.liked)
  return (
    <div>
    <h2>Liked videos</h2>
   <RenderVideo data={LikedVideosArray}/>
  </div>
  )
}

export default LikedVideos