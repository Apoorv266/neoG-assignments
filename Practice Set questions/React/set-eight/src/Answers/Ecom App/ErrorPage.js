import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <h1>404 : Page not found</h1>
      <Link to="/"> Back to Homepage </Link>
    </div>
  )
}

export default ErrorPage