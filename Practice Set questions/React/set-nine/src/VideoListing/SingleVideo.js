import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { pizzaContext } from './VideoContext';

const SingleVideo = () => {
    const {videoId} = useParams()
    const { videoData } = useContext(pizzaContext);
    const filterObj = videoData.find(item => item.id === Number(videoId))
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", border:"2px solid black"}}>
        <h2>{filterObj.title}</h2>
        <img src={filterObj.thumbnail} alt="" srcset="" width={"400px"}/>
        <a href={filterObj.url} target="_blank" rel="noopener noreferrer">Watch Now</a>
        <p><strong>Duration : </strong>{filterObj.duration} Mins</p>

        <button>{filterObj.liked ? "Liked":"Like"}</button>

        <button>{filterObj.watchLater ? "Added to watch later":"Add to watch later"}</button>
    </div>
  )
}

export default SingleVideo