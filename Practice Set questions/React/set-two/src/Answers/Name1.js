import React from 'react'

const Name1 = ({product, price}) => {
  return (
    <>
    <p style={{color: "blue"}}><strong>{product}</strong></p>
    <h3 style={{color: "green"}}><i>Price {"=>"} INR {price}</i></h3>
    </>
  )
}

export default Name1