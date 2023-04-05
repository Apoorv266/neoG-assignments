import React from 'react'

const Phones5 = ({ products }) => {
    return (
        <ol>
            {products.map((item) => {
                if (item.name === "mobile") {
                    return (
                        <li key={item.id}>
                            {item.name} --- {item.description} --- Rs.{item.price}
                        </li>
                    )
                }else{
                    return null
                }
            })}
        </ol>
    )
}

export default Phones5