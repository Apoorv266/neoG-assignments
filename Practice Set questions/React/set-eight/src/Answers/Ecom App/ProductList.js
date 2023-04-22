import React from 'react'
import { useContext } from "react";
import { cartContext } from "./EcomHome";

const ProductList = () => {
    const { data, addTocartFunc , addTowishFunc} = useContext(cartContext);
  return (
    <div>
        <h1>Product Listing</h1>
        {data.map((item) =>{
            return (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>Price : Rs. {item.price}</p>
                    <button onClick={() => addTocartFunc(item.id)}>Add to Cart</button>
                    {"  "}
                    <button onClick={()=>addTowishFunc(item.id)}>Add to Wishlist</button>
                    <hr/>
                </div>
            )
        })}
    </div>
  )
}

export default ProductList