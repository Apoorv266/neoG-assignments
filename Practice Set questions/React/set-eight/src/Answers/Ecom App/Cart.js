import React from 'react'
import { useContext } from "react";
import { cartContext } from "./EcomHome";

const Cart = () => {
  const { data, dltFrmCartFunc , cartNo} = useContext(cartContext);
  let emptyCart = true
  return (
    <div>
      {cartNo !== 0 && <h1>Total Items : {cartNo}</h1>}
      <h1>Cart Listing</h1>
      {data.map((item) => {
        if (item.cart) {
          return (
            <div key={item.id}>
              {emptyCart = false}
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price : Rs. {item.price}</p>
              <button onClick={() => dltFrmCartFunc(item.id)}>Remove From Cart</button>
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