import React from 'react'
import { useContext } from "react";
import { cartContext } from "./EcomHome";

const Wishlist = () => {
  const { data, dltFrmwishFunc , wishListNo} = useContext(cartContext);
  let emptyWishList = true
  return (
    <div>
      {wishListNo !== 0 && <h1>Total Items : {wishListNo}</h1>}
      <h1>Wishlist Listing</h1>
      {data.map((item) => {
        if (item.wislist) {
          return (
            <div key={item.id}>
              {emptyWishList = false}
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price : Rs. {item.price}</p>
              <button onClick={() => dltFrmwishFunc(item.id)}>Remove From WishList</button>
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