import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Questions from './Questions'
import Answers from './Answers'
import Home from './Home'
import ForumContextFunc from './ForumContext'

const ForumHome = () => {
    return (
        <ForumContextFunc>
        <div>

            <Routes>
            <Route path='/' element={<Home />} />
                <Route path='/questions' element={<Questions />} />
                <Route path='/answer/:answerId' element={<Answers />} />
            </Routes>
           
        </div>
        </ForumContextFunc>
    )
}

export default ForumHome