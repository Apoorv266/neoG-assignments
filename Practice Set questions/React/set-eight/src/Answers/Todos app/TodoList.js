import React, { useContext } from 'react'
import TodoContext from './TodoContext'
import { Link } from 'react-router-dom'

const TodoList = () => {
    const { todoData, markAsDoneFunc } = useContext(TodoContext)
    return (
        <div>
            <h1>Todos</h1>
            {
                todoData.map((item) => {
                    return (
                        <div key={item.id} >
                            <div style={{textDecoration: item.isCompleted ? "none" : "line-through"}}>
                            <h2>{item.title}</h2>
                            <p>Desc : {item.description}</p>
                            </div>
                            <p>Status : {item.isCompleted ? "Not Done" : " Done"}</p>
                            <button onClick={()=>markAsDoneFunc(item.id)}>Mark As {item.isCompleted ? "Done" : "Undone"}</button>{" "}
                            <Link to={`/todo/${item.id}`}>
                            <button>  Expand Todo</button>
                            </Link>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TodoList