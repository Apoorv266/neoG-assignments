import React, { useState } from 'react'

const TodoList5 = ({ todoItems1 }) => {
  const [data, setdata] = useState(todoItems1)

  const handleClick = (id) => {
    let clonedArr = [...data]
    setdata(clonedArr.map((item) => item.id === id ? { ...item, isDone: !item.isDone } : item))
  }
  return (
    <div><h1>Todo List</h1>
      <ul>
        {data.map((item) => {
          return (
            <>
              <li style={item.isDone ? { textDecoration: "line-through", color: "red" } : { textDecoration: "none", color: "black" }} key={item.id}>{item.task} </li>

              <button onClick={() => handleClick(item.id)}>{item.isDone ? "Mark as undone" : "Mark as Done"}</button>
            </>
          )
        })}
      </ul></div>
  )
}

export default TodoList5