import React, { useContext } from 'react'
import { booksContext } from './BookContext'
import { Link } from 'react-router-dom'

const ReadBooks = () => {
     const {data,addToFavFunc} = useContext(booksContext)
  return (
    <>
<h1>Red books</h1>
    <div style={{display: "flex", flexWrap: "wrap"}}>
    {data.filter(item => item.toRead).map((item)=>{
      return (
        <div key={item.id} style={{border: "2px solid black", width: '200px', padding: "30px", flex: "1"}}>
          <img src={item.image} alt="" srcset="" width={"100px"}/>
          <p>{item.id}</p>
          <p>Title : {item.title}</p>
          <p>Author : {item.author}</p>
          {item.toFav ? <Link to={"/favourites"}><button>Go to Fav</button></Link> :  <button onClick={() => addToFavFunc(item.id)}>
            Add to favourite
            </button>}
        </div>

      )
    })}
  </div>
  </>
  )
}

export default ReadBooks