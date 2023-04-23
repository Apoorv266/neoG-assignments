import React, { useContext } from 'react'
import TodoContext from './TodoContext'
import { Link } from 'react-router-dom'

const DoneTodo = () => {
  const { todoData } = useContext(TodoContext)
  let newArr = todoData.filter(item => !item.isCompleted)
  return (
    <div>
      <h1>Total Done items : {newArr.length}</h1>
      {
      newArr.map((item) => {
        return (
          <div key={item.id} >
            <div>
              <h2>{item.title}</h2>
              <p>Desc : {item.description}</p>
            </div>
            <Link to={`/todo/${item.id}`}>
                <button>  Expand Todo</button>
              </Link>
            <hr />
          </div>
        )
      })
    }</div>
  )
}

export default DoneTodo