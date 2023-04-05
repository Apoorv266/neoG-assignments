import React from 'react'

const Todo10 = ({todoItems}) => {
  return (
    <div>
        {todoItems.map((item)=>{
            return(
                <>
                <div key={item.id} style={{color: item.isCompleted ? "green" : "red"}}>
                <h1 >{item.title}</h1>
                <p>{item.description}</p>
                </div>
                </>
            )
        })}
    </div>
  )
}

export default Todo10