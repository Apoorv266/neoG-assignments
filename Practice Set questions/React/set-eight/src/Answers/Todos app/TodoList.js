import React, { useContext } from 'react'
import TodoContext from './TodoContext'

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
                            <p>Status : {item.isCompleted ? "Done" : "Not Done"}</p>
                            <button onClick={()=>markAsDoneFunc(item.id)}>Mark As {item.isCompleted ? "Done" : "Undone"}</button>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TodoList