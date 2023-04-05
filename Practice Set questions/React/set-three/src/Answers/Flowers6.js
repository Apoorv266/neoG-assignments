import React from 'react'

const Flowers6 = ({bouquet}) => {
  return (
    <div>
        <ol>
            {bouquet?.map((item)=>{
                if (item.flowers.includes("rose")) {
                    return <li>Price of bouquet with roses : Rs.{item.price}</li>
                }
            })}
        </ol>
    </div>
  )
}

export default Flowers6