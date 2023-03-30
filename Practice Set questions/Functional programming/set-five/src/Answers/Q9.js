import React from 'react'
// Create an array of objects representing products in an online store. Each object has the following properties: id, name, price, and category. Write a React component that takes the array of products as input and generates an ordered list of products, where each list item displays the product's name, price, and category.
const Q9 = () => {
    const products = [
        { id: 1, name: 'Samsung Galaxy S21', price: 799, category: 'Electronics' },
        { id: 2, name: 'Apple MacBook Air', price: 999, category: 'Computers' },
        { id: 3, name: 'Sony WH-1000XM4 Headphones', price: 349, category: 'Electronics' },
        { id: 4, name: 'Nike Air Max 270', price: 150, category: 'Shoes' },
        { id: 5, name: 'Bose QuietComfort Earbuds', price: 279, category: 'Electronics' },
      ];
  return (
   <ol>
    {products.map((item) => <li key={item.id}><b>{item.name}</b> - {item.category} - Rs. {item.price}</li>)}
   </ol>
  )
}

export default Q9