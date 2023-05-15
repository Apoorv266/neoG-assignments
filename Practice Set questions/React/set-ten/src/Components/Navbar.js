import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    const activeStyle = ({ isActive }) => {
        return {
            borderRight: isActive ? "5px solid red" : "none"
        }
    }
    return (
        <div className='nav-main'>
            <NavLink to={"/inbox"} className='nav-link' style={activeStyle}>Inbox</NavLink>
            <NavLink to={"/spam"} className='nav-link' style={activeStyle}>Spam</NavLink>
            <NavLink to={"/trash"} className='nav-link' style={activeStyle}>Trash</NavLink>
        </div>
    )
}

export default Navbar