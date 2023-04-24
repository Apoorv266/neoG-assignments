import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Questions from './Questions'
import Answers from './Answers'
import Home from './Home'

const ForumHome = () => {
    return (
        <div><h1>Welcome user !</h1>
            <Link to={"/questions"}>
                Show question List
            </Link>
            {" "}
            <Link to={"/answers"}>
                Show answer List
            </Link>
            {" "}
            <Link to={"/child2"}>
                Show child 
            </Link>
            <Routes>
            <Route path='/' element={<Home />} />
                <Route path='/questions' element={<Questions />} />
                <Route path='/answers' element={<Answers />} />
            </Routes>
        </div>
    )
}

export default ForumHome