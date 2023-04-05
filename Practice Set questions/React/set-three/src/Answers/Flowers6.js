import React from 'react'

const Flowers6 = ({bouquet}) => {
  return (
    <div>
        <ol>
            {bouquet?.map((item)=>{
              return item.flowers.includes("rose") ?  <li>Price of bouquet with roses : Rs.{item.price}</li> : null
            })}
        </ol>
    </div>
  )
}

export default Flowers6