import React, { useContext, useState } from 'react'
import { pizzaContext } from './VideoContext';

const LikedVideos = () => {
    const { videoData } = useContext(pizzaContext);
  return (
    <div>
    <h2>All videos</h2>
    <div style={{display:"flex", justifyContent:"center"}}>
      {videoData.filter(item => item.liked).map((item) => {
        return (
          <div style={{border:"2px solid black", marginRight:"40px", padding:"10px"}} id={item.id}>
            <img src={item.thumbnail} alt="" srcset="" width={"300px"}/>
            <p>{item.title}</p>
            <div><a href={item.url} target="_blank" rel="noopener noreferrer">Watch now</a></div>{" "}
            
            <button>Add to watch later</button>
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default LikedVideos