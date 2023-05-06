import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({cartData}) => {
  const {us}
  return (
    <div>
        <Link to={"/"}>Home</Link>{" "}
        <Link to={"/menu"}>Menu</Link>{" "}
        <Link to={"/cart"}>Cart</Link>{" "}
    </div>
  )
}

export default Navbar