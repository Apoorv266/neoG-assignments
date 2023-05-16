import React, { useContext } from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Spam from './Spam'
import Inbox from './Inbox'
import Trash from './Trash'
import "../Styles/Home.css"
import Filters from './Filters'

const Home = () => {
 
  return (
    <>
      <div className='home-main'>
        <div>
          <Navbar />
        </div>
        <div>
          <Filters/>
         
          <Routes>
            <Route path="/" element={<Inbox />} />
            <Route path="/spam" element={<Spam />} />
            <Route path="/trash" element={<Trash />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default Home