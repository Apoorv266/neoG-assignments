import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BookContext } from './BooksContext';

const Navbar = () => {
    const { booksData } = useContext(BookContext);
    const favNo = booksData.filter(item => item.toFav)
  return (
    <div>
        <Link to={"/"}>Home</Link>{" "}
        <Link to={"/favourite"}>Favorites {favNo.length}</Link>{" "}
        <Link to={"/profile"}>Profile</Link>
    </div>
  )
}

export default Navbar