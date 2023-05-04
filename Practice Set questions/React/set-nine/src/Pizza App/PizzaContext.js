import React, { createContext, useEffect, useState } from 'react'
import { fakeFetch } from './FakeFetch'


export const pizzaContext = createContext()
const PizzaContextFunc = ({ children }) => {
  const [data, setdata] = useState([])
  const [cartData, setcartData] = useState([])
  const [originalData, setoriginalData] = useState([])
  const [inputVal, setinputVal] = useState("")
  const [sort, setsort] = useState("")

  // const [filterState, setfilterState] = useState({
  //   box1: false,
  //   box2: false
  // })

  const [checkBox, setcheckBox] = useState([])

  const checkboxData =
    checkBox.length > 0
      ? data.filter((item) =>
        checkBox.every((checkboxItem) => item[checkboxItem])
      )
      : data;

  let filteredData = inputVal ? data.filter((item) => item.name.toLowerCase().includes(inputVal.toLowerCase()))
    : checkboxData

  let sortedData = sort ?
    filteredData.sort((item1, item2) => sort === 'lowtohigh' ? item1.price - item2.price : item2.price - item1.price) :
    filteredData;



  const handleSort1 = () => {
    setsort("lowtohigh")
  }

  const handleSort2 = () => {
    setsort("hightolow")
  }

  const handleCheckboxInput = (type) => {
    if (checkBox.includes(type)) {
      setcheckBox(checkBox.filter((item) => item !== type))
    } else {
      setcheckBox([...checkBox, type])
    }
  }


  // const handleBox1 = () => {
  //   setfilterState({ ...filterState, box1: !filterState.box1 })
  // }

  // const handleBox2 = () => {
  //   setfilterState({ ...filterState, box2: !filterState.box2 })
  // }


  // useEffect(() => {
  //   let newArr = [...originalData]
  //   if (filterState.box1) {
  //     newArr =originalData.filter(item => item.is_vegetarian)
  //   }
  //   if (filterState.box2) {
  //     newArr = originalData.filter(item => item.is_spicy)
  //   }
  //   if (filterState.box1 && filterState.box2) {
  //     newArr = originalData.filter(item => item.is_spicy && item.is_vegetarian)
  //   }
  //   if (!filterState.box1 && !filterState.box2) {
  //     newArr =originalData
  //   }
  //   setdata(newArr)
  // }, [filterState])


  const fetchFunc = async () => {
    const response = await fakeFetch("https://example.com/api/menu")
    if (response.status === 200) {
      setdata(response.data.menu)
      setoriginalData(response.data.menu)
    }
  }

  const handleToCart = (item) => {
    if (!cartData.includes(item)) {
      setcartData((cartData) => [...cartData, item]);
    }
  }

  useEffect(() => {
    fetchFunc()
  }, [])

  return (
    <pizzaContext.Provider value={{
      data, handleToCart, inputVal, setinputVal, sortedData, handleCheckboxInput,
      // handleBox1, handleBox2,
      handleSort1, handleSort2, cartData
    }}>{children}</pizzaContext.Provider>
  )
}

export default PizzaContextFunc