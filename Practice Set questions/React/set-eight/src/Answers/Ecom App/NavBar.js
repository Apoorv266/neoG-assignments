import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const getActiveStyle = ({isActive}) =>({
    margin : "1rem 0",
    fontWeight : isActive ?"600" : "200",
    color: isActive ? "red" : "black",
    textDecoration: "dotted"
  })
  return (
    <nav>
<NavLink style={getActiveStyle} to="/">
          {" "}
          Home{" "}
        </NavLink>{" "}
        ||{" "}
        <NavLink style={getActiveStyle} to="/cart">
          Cart{" "}
        </NavLink>{" "}{" "}
        ||
        <NavLink style={getActiveStyle} to="/Wishlist">
          {" "}
          Wishlist{" "}
        </NavLink>{" "}
    </nav>
  )
}

export default NavBar