import React from 'react'
import NavBar from './NavBar'
import ProductList from './ProductList'
import { BrowserRouter as Router } from "react-router-dom";
import Cart from "./Cart"
import Wishlist from "./Wishlist"
import { Routes, Route } from "react-router-dom";
import { cartContext } from './CartContext';
import CartContextProvider from './CartContext';
import AboutItem from './AboutItem';
import ErrorPage from './ErrorPage';
export { cartContext }

const EcomHome = () => {

  return (
    <div className='app'>
      <Router>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<Wishlist/>} />
            <Route path='/about/:productId' element={<AboutItem/>} />
            <Route path='*' element={<ErrorPage/>} />
          </Routes>
        </CartContextProvider>
      </Router>
    </div>
  )
}

export default EcomHome