import React from 'react'
import { Link } from 'react-router-dom'

const TodoNav = () => {
  return (
    <div>

        <Link to={"/donetodo"}>Done todo</Link>{" "}
        <Link>Open todo</Link>
    </div>
  )
}

export default TodoNav