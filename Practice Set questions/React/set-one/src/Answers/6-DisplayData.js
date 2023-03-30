import React from "react";

const DisplayData = ({ products }) => {
  return (
    <>
      <ul>
        {products
          .filter((item) => item.sales > item.quantity)
          .map((item, index) => {
            return (
              <li key={index}>
                Name : {item.name}, Quantity : {item.quantity}, Sales :{" "}
                {item.sales}
              </li>
            );
          })}
        <div>-------------------------------------</div>
        {/* or */}
        {products.map((item, index) => {
          return item.sales > item.quantity ? (
            <li key={index}>
              Name : {item.name}, Quantity : {item.quantity}, Sales :{" "}
              {item.sales}
            </li>
          ) : null;
        })}
        <div>-------------------------------------</div>
        {/* or */}
        {products.map((item, index) => {
          if (item.sales > item.quantity) {
            return <li key={index}>
            Name : {item.name}, Quantity : {item.quantity}, Sales :{" "}
            {item.sales}
          </li>
          }
          else{
            return null
          }
        })}
      </ul>
    </>
  );
};

export default DisplayData;
