import React, { useState } from 'react'

const MyGadgets8 = ({products}) => {
    const [style, setstyle] = useState(false)
  return (
    <div>
        <ol>
            {products.map((item) =>{
                return <li  style={{backgroundColor: style && item.price > 50000 ? "lightgreen " : ""}}>{item.name} --- {item.description} --- Rs.{item.price}</li>
            })}
        </ol>
        <button onClick={()=>setstyle(true)}>Highlight Expensive Gadget</button>
    </div>
  )
}

export default MyGadgets8