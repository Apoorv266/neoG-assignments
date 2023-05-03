import React from 'react'
import { useContext } from 'react'
import { TodoContext } from './TodoContext'

const AllTodos = () => {
const {todoData} = useContext(TodoContext)

  return (
    <div>{
        todoData.map((item) =>{
            return (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p>Status : {item.isCompleted ? "Done" : "Not done"}</p>
                    <hr/>
                </div>
            )
        })}</div>
  )
}

export default AllTodos