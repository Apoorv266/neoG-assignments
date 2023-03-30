// Create an array of objects representing cars in a dealership. Each object has the following properties: id, make, model, and price. Write a React component that takes the array of cars as input and returns an unordered list of cars, where each list item displays the car's make, model, and price.

import React from 'react'

const Q6 = () => {
    const cars = [
        { id: 1, make: 'Toyota', model: 'Camry', price: 25000 },
        { id: 2, make: 'Honda', model: 'Accord', price: 28000 },
        { id: 3, make: 'Ford', model: 'Mustang', price: 35000 },
        { id: 4, make: 'Chevrolet', model: 'Camaro', price: 40000 },
        { id: 5, make: 'Tesla', model: 'Model 3', price: 50000 },
      ];

      const displayList = item => <li key={item.id}>{item.make} - {item.model} - (Rs.{item.price})</li>

  return (
    <ul>
        {cars.map(displayList)}
    </ul>
  )
}

export default Q6