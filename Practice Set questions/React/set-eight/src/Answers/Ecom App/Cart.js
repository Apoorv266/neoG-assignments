import React from 'react'
import { useContext } from "react";
import { cartContext } from "./EcomHome";

const Cart = () => {
  const { data, dltFrmCartFunc } = useContext(cartContext);
  return (
    <div>
      <h1>Cart Listing</h1>
      {data ? data.map((item) => {
        if (item.cart) {
          return (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price : Rs. {item.price}</p>
              <button onClick={() => dltFrmCartFunc(item.id)}>Remove From Cart</button>
              {"  "}
              <hr />
            </div>
          )
        }else{
          return (
            null
          )
        }
      }) : <h3>No items in cart</h3>}
    </div>
  )
}

export default Cart