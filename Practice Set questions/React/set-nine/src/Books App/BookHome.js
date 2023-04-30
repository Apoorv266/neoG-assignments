import React, { useContext } from 'react'
import { Route, Routes } from 'react-router'
import { Link } from 'react-router-dom'
import AllBooks from './AllBooks'
import { booksContext } from './BookContext'
import Favourite from './Favourite'
import ReadBooks from './ReadBooks'
import BookProfile from './BookProfile'

const BookHome = () => {
  const {data} = useContext(booksContext)
  let {favCount, ReadCount} = data.reduce((acc, arr) => {
    if (arr.toFav) {
      acc.favCount = acc.favCount + 1
    } if(arr.toRead) {
      acc.ReadCount = acc.ReadCount + 1
    }
    return acc
  }, {favCount : 0, ReadCount : 0})

  return (
    <div>
      <Link to={"/"}>All Books</Link>{'    '}
      <Link to={"/favourites"}>Favourites{" "}({favCount})</Link>{'    '}
      <Link to={"/reads"}>Reads {"  "} ({ReadCount})</Link>{'    '}
      <Link to={"/profile"}>Profile</Link>

      <Routes>
        <Route path='/' element={<AllBooks/>}/>
        <Route path='/favourites' element={<Favourite/>}/>
        <Route path='/reads' element={<ReadBooks/>}/>
        <Route path='/profile' element={<BookProfile/>}/>
      </Routes>
    </div>
  )
}

export default BookHome