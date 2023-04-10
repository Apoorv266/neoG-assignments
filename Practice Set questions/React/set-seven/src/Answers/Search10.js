import React, { useEffect, useState } from 'react'

const Search10 = () => {
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
                                { name: "Sketch Pens", price: 110, quantity: 20, rating: 3.8 },
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
    const [inputValue, setinputValue] = useState("")


    const fetchFunc = async () => {
        const response = await fakeFetch("https://example.com/api/products")
        if (response.status === 200) {
            setdata(response.data.products)
        }
    }

    useEffect(() => {
        fetchFunc()
    }, [])
    
    const handleSearch = (event) => {
        setinputValue(event.target.value.toLowerCase());
      };
    
      const filteredProducts = data.filter((product) =>
        product.name.toLowerCase().includes(inputValue)
      );
    return (
        <div>
            <input type='text' value={inputValue} onChange={handleSearch}></input>
            {filteredProducts.map((item) => {
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

export default Search10