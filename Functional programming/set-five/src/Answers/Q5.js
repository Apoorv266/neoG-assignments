// Create an array of objects representing recipes in a cookbook. Each object has the following properties: id, recipe name, recipe creator name. Write a React component that takes the array of recipes as input and returns an unordered list, where each list item displays the recipe's name and recipe creator name.

import React from 'react'

const Q5 = () => {
    const recipes = [
        { id: 1, name: 'Pasta with Tomato Sauce', creator: 'John Smith' },
        { id: 2, name: 'Roast Chicken', creator: 'Jane Doe' },
        { id: 3, name: 'Vegetable Curry', creator: 'Bob Johnson' },
        { id: 4, name: 'Chocolate Cake', creator: 'Mary Davis' },
        { id: 5, name: 'Caesar Salad', creator: 'Tom Lee' },
      ];
  return (
    <ul>
        {recipes.map((item) =>(
            <li key={item.id}><b>Recipe's name  : </b>{item.name} - <b>Creator : </b>{item.creator}</li>
        ))}
    </ul>
  )
}

export default Q5