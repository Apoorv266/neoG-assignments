import React from 'react'
import { Link } from 'react-router-dom'

const TodoNav = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>{" "}
      <Link to={"/donetodo"}>Done todo</Link>{" "}
      <Link to={"/opentodo"}>Open todo</Link>
    </div>
  )
}

export default TodoNav