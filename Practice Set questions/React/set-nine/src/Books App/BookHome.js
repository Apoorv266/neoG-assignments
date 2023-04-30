import React, { useContext } from 'react'
import { Route, Routes } from 'react-router'
import { Link } from 'react-router-dom'
import AllBooks from './AllBooks'
import BookContextFunc, { booksContext } from './BookContext'
import Favourite from './Favourite'

const BookHome = () => {
  const {data} = useContext(booksContext)
  let favCount = data.reduce((acc, arr) => arr.toFav ? acc + 1 : acc, 0)
  console.log(data)
  return (
    <div>
      <Link to={"/"}>All Books</Link>{'    '}
      <Link to={"/favourites"}>Favourites{" "}{favCount}</Link>


      <Routes>
        <Route path='/' element={<AllBooks/>}/>
        <Route path='/favourites' element={<Favourite/>}/>
      </Routes>
    </div>
  )
}

export default BookHome