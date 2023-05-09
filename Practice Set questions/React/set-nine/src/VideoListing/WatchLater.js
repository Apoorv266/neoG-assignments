import React, { useContext } from 'react'
import RenderVideo from './RenderVideo'
import { pizzaContext } from './VideoContext';

const WatchLater = () => {
  const { videoData } = useContext(pizzaContext);
  let WatchLaterArray = videoData.filter(item => item.watchLater)
  return (
    <div>
      <h2>Watch Later List</h2>
      {WatchLaterArray?.length === 0 && <h2>No videos in watch later</h2>}
      <RenderVideo data={WatchLaterArray} />
    </div>
  )
}

export default WatchLater