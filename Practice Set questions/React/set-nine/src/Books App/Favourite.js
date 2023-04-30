import React, { useContext } from 'react'
import { booksContext } from './BookContext'

const Favourite = () => {
    const {data} = useContext(booksContext)
  return (
    <div style={{display: "flex", flexWrap: "wrap"}}>

    {data.filter(item => item.toFav).map((item)=>{
      return (
        <div key={item.id} style={{border: "2px solid black", width: '200px', padding: "30px", flex: "1"}}>
          <img src={item.image} alt="" srcset="" width={"100px"}/>
          <p>{item.id}</p>
          <p>Title : {item.title}</p>
          <p>Author : {item.author}</p>
          <button>Mark as read</button>
        </div>

      )
    })}
  </div>
  )
}

export default Favourite