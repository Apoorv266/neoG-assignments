import React, { useEffect, useState, createContext } from 'react'
import { fakeFetch } from './FakeFetch'

export const cartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [data, setdata] = useState([])

  const fetchFunc = async () => {
    const response = await fakeFetch("https://example.com/api/products")
    if (response.status === 200) {
      setdata(response.data.products)
    }
  }
  useEffect(() => {
    fetchFunc()
  }, [])


  const cartFunc = (currId) => {
    let cartArray = data.map((item) => item.id === currId ? {...item , cart : item["cart"] ? !item.cart : true} : item)
    setdata(cartArray)
  }


  const wishlistFunc = (currId) => {
    let wishListArr = data.map((item) => item.id === currId ? {...item , wishlist : item["wishlist"] ? !item.wishlist : true} : item)
    setdata(wishListArr)
  }


  return (
    <cartContext.Provider value={{ data, cartFunc, wishlistFunc }}>
      {children}
    </cartContext.Provider>
  )
}

export default CartContextProvider