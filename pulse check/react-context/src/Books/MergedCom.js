import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { BookContext } from './BooksContext';

const MergedCom = ({ isFav }) => {
  const { handleFavFunc, booksData } = useContext(BookContext);
  const displayData = isFav ? booksData.filter(item => item.toFav) : booksData
  return (
    <div>{displayData.map((item) => {
      return (
        <div key={item.id}>
          <img src={item.image} alt="" srcset="" width={"150px"} />
          <h3>Title:{item.title}</h3>
          <p>Author: {item.author}</p>
          {isFav ? null : item.toFav ? (
            <Link to={"/favourite"}>
              <button>Go to fav</button>
            </Link>
          ) : (
            <button onClick={() => handleFavFunc(item.id)}>Add to fav</button>
          )}
          <hr />
        </div>
      );
    })}</div>
  )
}

export default MergedCom