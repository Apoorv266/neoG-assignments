import React, { useContext } from 'react'
import { pizzaContext } from './VideoContext';
import { Link } from 'react-router-dom';

const RenderVideo = ({data}) => {
    const {handleLikeFunc, handleLaterFunc } = useContext(pizzaContext);
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
        {data.map((item) => {
          return (
            <div style={{border:"2px solid black", marginRight:"40px", padding:"10px"}} id={item.id}>
              <img src={item.thumbnail} alt="" srcset="" width={"300px"}/>
              <p>{item.title}</p>
              <Link to={`/video/${item.id}`}>
              <div><a href={item.url} target="_blank" rel="noopener noreferrer">Watch now</a></div>{" "}
              </Link>

               <button onClick={()=>handleLikeFunc(item.id)}>{item.liked ? "Liked":"Like"}</button>

            <button onClick={()=>handleLaterFunc(item.id)}>{item.watchLater ? "Added to watch later":"Add to watch later"}</button>
            </div>
          );
        })}
      </div>
  )
}

export default RenderVideo