// Create an array of objects representing products in an online store. Each object has the following properties: id, name, price, and category. Write a React component that takes the array of products as input and returns an unordered list of products, where each list item displays the product's name, price, and category.

import React from 'react'
const Q2 = () => {
    const products = [
        { id: 1, name: 'Product 1', price: 10.99, category: 'Category A' },
        { id: 2, name: 'Product 2', price: 24.99, category: 'Category B' },
        { id: 3, name: 'Product 3', price: 15.99, category: 'Category A' },
        { id: 4, name: 'Product 4', price: 19.99, category: 'Category C' },
      ];
  return (
    <>
    <ul>
     <h4>Produce Name  -  Price  -   Category</h4>
        {products.map((item) =>(
          <li key={item.id}>{item.name}  -  {item.price}  -   {item.category}</li>
        ))}
    </ul>
    </>
  )
}

export default Q2