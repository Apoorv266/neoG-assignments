import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Spam from './Spam'
import Inbox from './Inbox'
import Trash from './Trash'
import "../Styles/Home.css"

const Home = () => {
  return (
    <>
      <div className='home-main'>
        <div>
          <Navbar />
        </div>
        <div>
          <h2>Unread: 7</h2>
          <Routes>
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/spam" element={<Spam />} />
            <Route path="/trash" element={<Trash />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default Home