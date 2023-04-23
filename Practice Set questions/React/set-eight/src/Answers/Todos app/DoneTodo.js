import React, { useContext } from 'react'
import TodoContext from './TodoContext'

const DoneTodo = () => {
    const { todoData } = useContext(TodoContext)
    let newArr = todoData.filter(item => item.com)
  return (
    <div>{
        newArr.map((item) =>{
            return (
                <div key={item.id} >
                            <div style={{textDecoration: item.isCompleted ? "none" : "line-through"}}>
                            <h2>{item.title}</h2>
                            <p>Desc : {item.description}</p>
                            </div>
                            <hr />
                        </div>
            )
        })
        }</div>
  )
}

export default DoneTodo