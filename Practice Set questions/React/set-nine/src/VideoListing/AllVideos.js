import React, { useContext } from "react";
import { pizzaContext } from "./VideoContext";

const AllVideos = () => {
  const { videoData, handleLikeFunc } = useContext(pizzaContext);
  return (
    <div>
      <h2>All videos</h2>
      <div style={{display:"flex", justifyContent:"center"}}>
        {videoData.map((item) => {
          return (
            <div style={{border:"2px solid black", marginRight:"40px", padding:"10px"}} id={item.id}>
              <img src={item.thumbnail} alt="" srcset="" width={"300px"}/>
              <p>{item.title}</p>
              <div><a href={item.url} target="_blank" rel="noopener noreferrer">Watch now</a></div>{" "}
              { <button onClick={()=>handleLikeFunc(item.id)}>{item.liked ? "Liked":"Like"}</button>}
              <button>Add to watch later</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllVideos;
