import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useContext } from "react";
import { cartContext } from "./EcomHome";


const AboutItem = () => {
    const { data } = useContext(cartContext);
    const { productId } = useParams();
    let itemObj = data.find(item => item.id === Number(productId))
   
    return (
        <>
            {itemObj ? (
                <div><h1>About :</h1>
                    <p><strong>Name : </strong>{itemObj?.name}</p>
                    <p><strong>Description : </strong>{itemObj?.description}</p>
                    <p><strong>Price : </strong>Rs. {itemObj?.price}</p>
                    <p><strong>Category : </strong>{itemObj?.category}</p>
                    <p><strong>Brand : </strong>{itemObj?.brand}</p>
                    <Link to="/"> See All </Link></div>) : <h1>Loading Data...</h1>}
        </>
    )
}

export default AboutItem