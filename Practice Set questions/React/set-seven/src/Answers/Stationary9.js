import React, { useEffect, useState } from 'react'

const Stationary9 = () => {
    const fakeFetch = (url) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (url === "https://example.com/api/products") {
              resolve({
                status: 200,
                message: "Success",
                data: {
                  products: [
                    { name: "Color Pencils", price: 50, quantity: 40, rating: 4.5 },
                    { name: "Sketchpens", price: 110, quantity: 20, rating: 3.8 },
                    { name: "Eraser", price: 20, quantity: 20, rating: 4.2 },
                    { name: "Sharpener", price: 22, quantity: 30, rating: 4.7 }
                  ]
                }
      
              });
            } else {
              reject({
                status: 404,
                message: "Product list not found."
              });
            }
          }, 2000);
        });
      };

      const [data, setdata] = useState([])
        const [sortedProducts, setSortedProducts] = useState([]);

      const fetchFunc = async () =>{
        const response = await fakeFetch("https://example.com/api/products")
        if (response.status === 200) {
            setdata(response.data.products)
            setSortedProducts(response.data.products)
        }
      }

      useEffect(() => {
        fetchFunc()
      }, [])

      const handleClick = (type) =>{
        if (type === "highToLow") {
            let array = [...data]
            setSortedProducts(array.sort((a, b)=> b.rating - a.rating )) 
        }else{
            setSortedProducts(data)
        }
      }

  return (
    <div><button onClick={()=>handleClick("highToLow")}>Sort lowest to highest Ratings</button>
    <button onClick={()=>handleClick("reset")}>Reset</button>
    {sortedProducts.map((item) =>{
        return (
    <div>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <p>$ {item.price}</p>
        <p>Quantity : {item.quantity}</p>
        <p>Rating : {item.rating}</p>
    </div>
        )
    })}</div>
  )
}

export default Stationary9