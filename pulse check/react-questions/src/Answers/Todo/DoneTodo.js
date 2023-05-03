import React, { useContext } from 'react'
import { TodoContext } from './TodoContext'
import { Link } from 'react-router-dom'

const DoneTodo = () => {
    const {todoData} = useContext(TodoContext)
  return (
    <div>{
        todoData.filter(item => item.isCompleted).map((item) =>{
            return (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p>Status : {item.isCompleted ? "Done" : "Not done"}</p>
                    <Link to={`/todo/${item.id}`}>
                            <button>Expand Todo</button>
                        </Link>
                    <hr/>
                </div>
            )
        })}</div>
  )
}

export default DoneTodo