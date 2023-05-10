import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import EmailContextFunc from './EmailContext'
import Inbox from './Inbox'

const Home = () => {
    return (
        <EmailContextFunc>
            <div>
                <Link to={"/"}>Home</Link>{ " || "}
                <Link to={"/inbox"}>Inbox</Link>


                <h1>Email app</h1>
                <Link to={"/inbox"}><button>To Inbox</button></Link>
                <Routes>
                    <Route path="/" element={<></>} />
                    <Route path="/inbox" element={<Inbox />} />
                </Routes>
            </div>
        </EmailContextFunc>
    )
}

export default Home