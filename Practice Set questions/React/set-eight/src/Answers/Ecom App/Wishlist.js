import React from 'react'
import { useContext } from "react";
import { cartContext } from "./EcomHome";

const Wishlist = () => {
  const { data, wishlistFunc} = useContext(cartContext);
  let emptyWishList = true
  return (
    <div>
      <h1>Wishlist Listing</h1>
      <h1>Total Items : {data.reduce((acc, arr) => arr.wishlist === true ? acc + 1: acc, 0)}</h1>
      {data.map((item) => {
        if (item.wishlist) {
          return (
            <div key={item.id}>
              {emptyWishList = false}
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price : Rs. {item.price}</p>
              <button onClick={() => wishlistFunc(item.id)}>Remove From WishList</button>
              {"  "}
              <hr />
            </div>
          )
        }else return null
      })}
      {emptyWishList && <h3>No items in WishList</h3>}
    </div>
  )
}

export default Wishlist