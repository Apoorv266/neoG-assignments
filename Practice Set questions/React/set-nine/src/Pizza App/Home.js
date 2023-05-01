import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Menu from './Menu'
import PizzaContextFunc from './PizzaContext'
import Welcome from './Welcome'
import PizzaCart from './PizzaCart'

const Home = () => {
    return (
        <PizzaContextFunc>
            <div>
               
                <Routes>
                    <Route path="/" element={<Welcome/>} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/cart" element={<PizzaCart />} />
                </Routes>
            </div>
        </PizzaContextFunc>
    )
}

export default Home