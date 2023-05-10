import React, { useContext } from 'react'
import { BookContext } from './BooksContext';

const Favourites = () => {
    const { booksData } = useContext(BookContext);
  return (
    <div>
    <h1>Favourites books</h1>
    {booksData.filter(item => item.toFav).map((item) => {
      return (
        <div key={item.id}>
          <img src={item.image} alt="" srcset="" width={"150px"} />
          <h3>{item.title}</h3>
          <p>Author: {item.author}</p>
          <hr></hr>
        </div>
      );
    })}
  </div>
  )
}

export default Favourites