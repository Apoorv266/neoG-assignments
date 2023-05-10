import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllBooks from './AllBooks'
import Navbar from './Navbar'
import BooksContextFunc from './BooksContext'
import Favourites from './Favourites'
import Profile from './Profile'

const HomePage = () => {
  return (
    <BooksContextFunc>
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<AllBooks/>}/>
            <Route path='/favourite' element={<Favourites/>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Routes>
    </div>
    </BooksContextFunc>
  )
}

export default HomePage