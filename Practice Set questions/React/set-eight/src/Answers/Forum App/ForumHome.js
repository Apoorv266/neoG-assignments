import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Questions from './Questions'
import Answers from './Answers'

const ForumHome = () => {
    return (
        <div><h1>Welcome user !</h1>
            <Link to={"/questions"}>
                Show question List
            </Link>
            {
                " "
            }
            <Link to={"/answers"}>
                Show answer List
            </Link>

            {/* <ForumHome/> */}
            <Routes>
            <Route path='/' element={<ForumHome />} />
                <Route path='/questions' element={<Questions />} />
                <Route path='/answers' element={<Answers />} />
            </Routes>
        </div>
    )
}

export default ForumHome