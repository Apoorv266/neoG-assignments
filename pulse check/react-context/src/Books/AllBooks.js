import React, { useContext } from "react";
import { BookContext } from "./BooksContext";
import { Link } from "react-router-dom";

const AllBooks = () => {
  const { booksData, handleFavFunc } = useContext(BookContext);
  return (
    <div>
      <h1>All books</h1>
      {booksData.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt="" srcset="" width={"150px"} />
            <h3>Title:{item.title}</h3>
            <p>Author: {item.author}</p>
            {item.toFav ? (
              <Link to={"/favourite"}>
                <button>Go to fav</button>
              </Link>
            ) : (
              <button onClick={()=>handleFavFunc(item.id)}>Add to fav</button>
            )}
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};

export default AllBooks;
