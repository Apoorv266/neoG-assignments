import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { pizzaContext } from './PizzaContext'

const Navbar = () => {
  const {cartData} = useContext(pizzaContext)
  return (
    <div>
        <Link to={"/"}>Home</Link>{" "}
        <Link to={"/menu"}>Menu</Link>{" "}
        <Link to={"/cart"}>Cart {cartData.length}</Link>{" "}
    </div>
  )
}

export default Navbar