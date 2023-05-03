import React, { createContext, useEffect, useState } from 'react'
import { fakeFetch } from './FetchData'


export const TodoContext = createContext()

const TodoContextFunc = ({ children }) => {

  const [todoData, settodoData] = useState([])

  const fetchFunc = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/todos")
      if (response.status === 200) {
        settodoData(response.data.todos)
      }
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchFunc()
  }, [])

  return (
    <TodoContext.Provider value={{ todoData }}>{children}</TodoContext.Provider>
  )
}

export default TodoContextFunc