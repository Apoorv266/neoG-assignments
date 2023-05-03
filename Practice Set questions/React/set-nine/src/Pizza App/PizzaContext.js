import React, { createContext, useEffect, useState } from 'react'
import { fakeFetch } from './FakeFetch'


export const pizzaContext = createContext()
const PizzaContextFunc = ({ children }) => {
  const [data, setdata] = useState([])
  const [inputVal, setinputVal] = useState("")
  const [originalData, setoriginalData] = useState([])
  const [filterState, setfilterState] = useState({
    box1: false,
    box2: false
  })

  const [sort, setsort] = useState("")


  let filteredData = inputVal ? data : data.filter((item) => item.name.toLowerCase().includes(inputVal.toLowerCase()))

  let sortedData = sort ? 
  filteredData.sort((item1, item2) => sort === 'lowtohigh' ? item1.price - item2.price : item2.price - item1.price) : 
  filteredData;


  const handleBox1 = () => {
    setfilterState({ ...filterState, box1: !filterState.box1 })
  }

  const handleBox2 = () => {
    setfilterState({ ...filterState, box2: !filterState.box2 })
  }

  const handleSort1 = () => {
    setsort("lowtohigh")
  }

  const handleSort2 = () => {
    setsort("hightolow")
  }


  useEffect(() => {
    if (filterState.box1) {
      setdata(originalData.filter(item => item.is_vegetarian))
    }
    if (filterState.box2) {
      setdata(originalData.filter(item => item.is_spicy))
    }
    if (filterState.box1 && filterState.box2) {
      setdata(originalData.filter(item => item.is_spicy && item.is_vegetarian))
    }
    if (!filterState.box1 && !filterState.box2) {
      setdata(originalData)
    }
  }, [filterState])
  

  const fetchFunc = async () => {
    const response = await fakeFetch("https://example.com/api/menu")
    if (response.status === 200) {
      setdata(response.data.menu)
      setoriginalData(response.data.menu)
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
    <pizzaContext.Provider value={{ data, handleToCart, inputVal, setinputVal, sortedData, handleBox1, handleBox2 , handleSort1, handleSort2}}>{children}</pizzaContext.Provider>
  )
}

export default PizzaContextFunc