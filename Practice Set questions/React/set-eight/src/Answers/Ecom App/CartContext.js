import React, { useEffect, useState, createContext } from 'react'
import { fakeFetch } from './FakeFetch'

export const cartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [data, setdata] = useState([])
  const [cartNo, setcartNo] = useState(0)

  const fetchFunc = async () => {
    const response = await fakeFetch("https://example.com/api/products")
    if (response.status === 200) {
      setdata(response.data.products)
    }
  }
  useEffect(() => {
    fetchFunc()
  }, [])


  const addTocartFunc = (currId) =>{
    let cartArray = data.map((item) => item.id === currId ? {...item, cart: true} : item)
    setdata(cartArray) 
    setcartNo((cartNo) => cartNo + 1)
  }


  const dltFrmCartFunc = (currId) =>{
    let dltcartArray = data.map((item) => item.id === currId ? {...item, cart: false} : item)
    setdata(dltcartArray)
    setcartNo((cartNo) => cartNo - 1)
  }

  return (
    <cartContext.Provider value={{ data , addTocartFunc, dltFrmCartFunc, cartNo}}>
      {children}
    </cartContext.Provider>
  )
}

export default CartContextProvider