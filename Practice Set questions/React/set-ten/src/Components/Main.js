import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import MailDetail from './MailDetail'

const Main = () => {
  return (
    <>
    <h1>G-Mail</h1>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mail/id/:mailId" element={<MailDetail />} />
    </Routes>
    </>
  )
}

export default Main