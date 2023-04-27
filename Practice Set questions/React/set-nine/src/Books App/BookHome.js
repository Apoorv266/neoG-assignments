import React from 'react'
import { Route, Routes } from 'react-router'
import { Link } from 'react-router-dom'
import AllBooks from './AllBooks'
import BookContextFunc from './BookContext'

const BookHome = () => {
  return (
    <div>
      <BookContextFunc>
      <Link to={"/"}>All Books</Link>


      <Routes>
        <Route path='/' element={<AllBooks/>}/>
      </Routes>
      </BookContextFunc>
    </div>
  )
}

export default BookHome