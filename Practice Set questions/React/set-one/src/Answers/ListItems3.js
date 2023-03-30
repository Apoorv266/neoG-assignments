import React from 'react'

const ListItems3 = ({items, header}) => {
  
  return (
    <>
    <h1>{header}</h1>
    {items.map((item) => {
        return (
            item + " "
        )
    })}
    </>
  )
}

export default ListItems3