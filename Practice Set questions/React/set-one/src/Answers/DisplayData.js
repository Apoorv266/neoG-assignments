import React from 'react'

const DisplayData = ({ products }) => {
    return (
        <>
            <ul>
                {products.filter((item) => item.sales > item.quantity).map((item, index) => {
                    return (<li key={index}>Name : {item.name},  Quantity : {item.quantity},  Sales : {item.sales}</li>)
                })}
            </ul>
        </>
    )
}

export default DisplayData