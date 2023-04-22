import React from 'react'
import { useContext } from "react";
import { cartContext } from "./EcomHome";
import { Link } from 'react-router-dom';

const ProductList = () => {
    const { data, cartFunc , wishlistFunc} = useContext(cartContext);
  return (
    <div>
        <h1>Product Listing</h1>
        {data.map((item) =>{
            return (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>Price : Rs. {item.price}</p>
                    <Link to={`/about/${item.id}`}><button>View Details</button></Link>
                    {"  "}
                    <button onClick={() => cartFunc(item.id)}>Add to Cart</button>
                    {"  "}
                    <button onClick={()=>wishlistFunc(item.id)}>Add to Wishlist</button>
                    <hr/>
                </div>
            )
        })}
    </div>
  )
}

export default ProductList