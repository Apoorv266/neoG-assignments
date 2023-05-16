import React, { useContext } from 'react'
import {  NavLink } from 'react-router-dom'
import { emailContext } from '../Contexts/EmailContext';

const Navbar = () => {
    const { countValue } = useContext(emailContext);
    const activeStyle = ({ isActive }) => {
        return {
            borderRight: isActive ? "5px solid red" : "none"
        }
    }
    return (
        <div className='nav-main'>
            <NavLink to={"/"} className='nav-link' style={activeStyle}>Inbox</NavLink>
            <NavLink to={"/spam"} className='nav-link' style={activeStyle}>Spam ({countValue.spamVal})</NavLink>
            <NavLink to={"/trash"} className='nav-link' style={activeStyle}>Trash ({countValue.dltVal})</NavLink>
        </div>
    )
}

export default Navbar