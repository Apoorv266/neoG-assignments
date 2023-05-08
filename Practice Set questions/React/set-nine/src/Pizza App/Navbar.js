import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { pizzaContext } from './PizzaContext'

const Navbar = ({cartData}) => {
  const {us} = useContext(pizzaContext)
  return (
    <div>
        <Link to={"/"}>Home</Link>{" "}
        <Link to={"/menu"}>Menu</Link>{" "}
        <Link to={"/cart"}>Cart</Link>{" "}
    </div>
  )
}

export default Navbar