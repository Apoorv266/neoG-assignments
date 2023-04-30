import React, { useContext } from 'react'
import { booksContext } from './BookContext'

const Favourite = () => {
    const {data, addToReadFunc} = useContext(booksContext)
  return (
    <>
    <h1>Favourite books</h1>
    <div style={{display: "flex", flexWrap: "wrap"}}>

    {data.filter(item => item.toFav).map((item)=>{
      return (
        <div key={item.id} style={{border: "2px solid black", width: '200px', padding: "30px", flex: "1"}}>
          <img src={item.image} alt="" srcset="" width={"100px"}/>
          <p>{item.id}</p>
          <p>Title : {item.title}</p>
          <p>Author : {item.author}</p>
          <button disabled={item.toRead} onClick={() => addToReadFunc(item.id)}>{item.toRead ? "Already Red" : "Mark as read"}</button>
        </div>

      )
    })}
  </div>
  </>
  )
}

export default Favourite