import React, { createContext, useEffect, useState } from 'react'
import { fakeFetch } from '../Todos app/TodoFetch'

export const TodoContext = createContext()

export const TodoContextFunc = ({ children }) => {
    const [todoData, settodoData] = useState([])

    const fetchFunc = async () => {
        const response = await fakeFetch("https://example.com/api/todos")
        if (response.status === 200) {
            settodoData(response.data.todos)
        }
    }


    useEffect(() => {
        fetchFunc()
    }, [])

    const markAsDoneFunc = (currId) => {
        let array = todoData.map((item) => item.id === currId ? { ...item, isCompleted: !item.isCompleted } : item)
        settodoData(array)
    }

    return (
        <TodoContext.Provider value={{ todoData, markAsDoneFunc }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext