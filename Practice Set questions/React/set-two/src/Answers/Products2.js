import React from 'react'

const Products2 = ({product, price}) => {
  return (
    <>
    <p style={{color: "blue"}}><strong>{product}</strong></p>
    <h3 style={{color: "green"}}><i>Price {"=>"} INR {price}</i></h3>
    </>
  )
}

export default Products2