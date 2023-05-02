import React, { createContext, useEffect, useState } from 'react'
import { fakeFetch } from './FakeFetch'


export const pizzaContext = createContext()
const PizzaContextFunc = ({ children }) => {
  const [data, setdata] = useState([])
  const [inputVal, setinputVal] = useState("")


  let filteredData = inputVal === "" ? data : data.filter((item) => item.name.toLowerCase().includes(inputVal.toLowerCase()))

  const fetchFunc = async () => {
    const response = await fakeFetch("https://example.com/api/menu")
    if (response.status === 200) {
      setdata(response.data.menu)
    }
  }

  const handleToCart = (currId) => {
    let newArr = data.map((item) => item.id === currId ? { ...item, toCart: true } : item)
    setdata(newArr)
  }

  useEffect(() => {
    fetchFunc()
  }, [])

  return (
    <pizzaContext.Provider value={{ data, handleToCart, inputVal, setinputVal, filteredData }}>{children}</pizzaContext.Provider>
  )
}

export default PizzaContextFunc