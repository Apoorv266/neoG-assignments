import React, { useState } from 'react'
// . Build a React component called MyGadgets that receives an array of products as a prop. Render each product's name, description, and price as an ordered list. Create a button below all the listings which says “Highlight Expensive Gadget” and on click of the button add a lightgreen backgroundColor to the items which has a price more than 50000.
const Bonus = ({ products }) => {
    const [data, setdata] = useState(products)
    const [style, setstyle] = useState(false)
const handleClick = () =>{
    setstyle(true)
    setdata(products.filter((item) => item.price > 50000))
}
    return (
        <div>
            <ol>
                {data.map((item) => {
                    return (
                        <li style={{color: style && "lightgreen"}}>
                            <p>{item.name}</p>
                            <p>{item.description}</p>
                            <p>Rs.{item.price}</p>
                        </li>
                    )
                })}
            </ol>
            <button onClick={handleClick}>Highlight Expensive Gadget</button>
        </div>
    )
}

export default Bonus