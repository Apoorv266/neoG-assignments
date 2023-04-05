import React from 'react'

const Gadgets4 = ({products}) => {
  return (
    <>
    <ol>
      {products.map((item) =>{
        return (
          <li key={item.id} style={{border:item.price > 50000 ? "2px solid red": ""}}>
            {item.name} --- {item.description} --- Rs.{item.price}
          </li>
        )
      })}
    </ol>
    </>
  )
}

export default Gadgets4