import React, { useState } from 'react'

const Todos4 = ({todoItems}) => {
    const [data, setdata] = useState(todoItems)
    const dltFunc = (id) =>{
        setdata(data.filter((item) => item.id !== id))
    }
  return (
    <div>
        <h1>Todo List</h1>
        <ul>
           {data.map((item) =>{
            return (
                <>
                <li key={item.id} style={{textDecoration : item.isDone ? "line-through": "none"}}>{item.task}</li>
                <button onClick={()=>dltFunc(item.id)}>X</button>
                </>
            )
           } )}
        </ul>
    </div>
  )
}

export default Todos4