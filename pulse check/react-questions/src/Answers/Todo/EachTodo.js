import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { TodoContext } from './TodoContext'

const EachTodo = () => {
    const { todoData } = useContext(TodoContext)
    const { todoId } = useParams()
    let {title, description, isCompleted} = todoData.find((item) => item.id === Number(todoId))
    return (
        <div>
            <h1>Todo Description</h1>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>Status : {isCompleted ? "Done" : "Not Done"}</p>

        </div>
    )
}

export default EachTodo