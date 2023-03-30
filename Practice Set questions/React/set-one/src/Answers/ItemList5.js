import React from "react";

const ItemList5 = ({ products }) => {
  return (
    <div>
      <h1>Product Names</h1>
      <ul>
        {products.sort((a, b) => {
          return b.quantity - a.quantity;
        }).map((item) =>{
            return <li>{item.name}</li>
        })}
      </ul>
    </div>
  );
};

export default ItemList5;
