import React from 'react'
import { useContext } from "react";
import { cartContext } from "./EcomHome";

const Cart = () => {
  const { data , cartFunc} = useContext(cartContext);
  let emptyCart = true
  return (
    <div>
      <h1>Cart Listing</h1>
       <h1>Total Items : {data.reduce((acc, arr) => arr.cart === true ? acc + 1: acc, 0)}</h1>
      {data.map((item) => {
        if (item.cart) {
          return (
            <div key={item.id}>
              {emptyCart = false}
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price : Rs. {item.price}</p>
              <button onClick={() => cartFunc(item.id)}>Remove From Cart</button>
              {"  "}
              <hr />
            </div>
          )
        }else return null
      })}
      {emptyCart && <h3>No items in cart</h3>}
    </div>
  )
}

export default Cart