import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import EmailContextFunc from './EmailContext'
import Inbox from './Inbox'

const Home = () => {
  return (
    <EmailContextFunc>
    <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/inbox"}>Inbox</Link>

        <Routes>
            <Route path="/" element={<></>}/>
            <Route path="/inbox" element={<Inbox/>}/>
        </Routes>
        {/* <Link to={"/inbox"}><button>To Inbox</button></Link> */}
    </div>
    </EmailContextFunc>
  )
}

export default Home