import React from 'react'
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
        <h1>My Mail Box</h1>
        <Link>Inbox</Link>{' '}
        <Link>Sent</Link>
    </div>
  )
}

export default LandingPage