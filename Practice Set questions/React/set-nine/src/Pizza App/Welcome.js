import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div> <h1>Welcome to Pizza App</h1>
            <Link to={"/menu"}>
                <button>Take me to menu {" "}{">>>"}</button>
            </Link></div>
    )
}

export default Welcome