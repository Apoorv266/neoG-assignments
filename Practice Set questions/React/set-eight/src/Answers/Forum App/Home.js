import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
        <h1>Welcome User !</h1>
         <Link to={"/questions"}>
                Show question List
            </Link>
    </div>
   
  )
}

export default Home