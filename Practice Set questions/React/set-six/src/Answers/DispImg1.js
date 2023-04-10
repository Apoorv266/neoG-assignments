import React, { useEffect, useState } from "react";

const DispImg1 = () => {
  const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/products") {
          resolve({
            status: 200,
            message: "Success",
            data: {
              products: [
                {
                  name: "Shoes",
                  price: 3000,
                  desc: "lorem ipsum dolor sit amit",
                  src: "https://picsum.photos/200/200",
                },
                {
                  name: "Tshirt",
                  price: 500,
                  inStock: false,
                  desc: "lorem ipsum dolor sit amit",
                  src: "https://picsum.photos/201/201",
                },
                {
                  name: "Trekking Bag",
                  price: 2000,
                  inStock: true,
                  desc: "lorem ipsum dolor sit amit",
                  src: "https://picsum.photos/205/205",
                },
              ],
            },
          });
        } else {
          reject({
            status: 404,
            message: "Items list not found.",
          });
        }
      }, 2000);
    });
  };

  
  const [data, setdata] = useState([]);
  const [btnData, setbtnData] = useState([]);
  const [filterValue, setfilterValue] = useState(null)

const filterFunc = ()=>{
  if (filterValue !== null) {
    return data.filter(item => item.name === filterValue)
  }else{
    return data
  }
}
  const fetchFunc = async () => {
    const response = await fakeFetch("https://example.com/api/products");
    if (response.status === 200) { 
      setdata(response.data.products);
      setbtnData(response.data.products.map(item => item.name));
    }
  };

  useEffect(() => {
    fetchFunc();
  }, []);

  const handleClick = (item) => {
    setfilterValue(item)
  };
  return (
    <>
      <div>
        {btnData.map((item) => (
          <button onClick={() => handleClick(item)}>Show {item}</button>
        ))}
      </div>
      <div>
        {filterFunc().map((item, index) => {
          return (
            <div key={index}>
              <img src={item.src} alt="" srcset="" />
              <h4>Name : {item.name}</h4>
              <h4>Price : Rs. {item.price}</h4>
              <h4>Description : {item.desc}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DispImg1;
