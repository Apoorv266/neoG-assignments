import React, { useEffect, useState } from 'react'

const Ecom = () => {
    const fakeFetch = (url) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (url === 'https://example.com/api/products') {
                    resolve({
                        status: 200,
                        message: 'Success',
                        data: {
                            products: [
                                {
                                    name: 'Product 1',
                                    description: 'This is the first product',
                                    price: 25.99,
                                    quantity: 10,
                                },
                                {
                                    name: 'Product 2',
                                    description: 'This is the second product',
                                    price: 19.99,
                                    quantity: 15,
                                },
                                {
                                    name: 'Product 3',
                                    description: 'This is the third product',
                                    price: 35.5,
                                    quantity: 5,
                                },
                                {
                                    name: 'Product 4',
                                    description: 'This is the fourth product',
                                    price: 49.99,
                                    quantity: 20,
                                },
                            ],
                        },
                    })
                } else {
                    reject({
                        status: 404,
                        message: 'Product list not found.',
                    })
                }
            }, 2000)
        })
    }

    const [productData, setproductData] = useState([])
    const [originalData, setoriginalData] = useState([])

    const fetchData = async () => {
        try {
            const response = await fakeFetch("https://example.com/api/products")
            if (response.status === 200) {
                setproductData(response.data.products)
                setoriginalData(response.data.products)
            }
        }

        catch (e) {
            console.log(e)
        }
    }

    const handleSort = (type) => {
        let sorted;
        if (type === "lowToHigh") {
            sorted = [...originalData].sort((a, b) => a.price - b.price);
        } else if (type === "highToLow") {
            sorted = [...originalData].sort((a, b) => b.price - a.price);
        } else {
            sorted = originalData;
        }
        setproductData(sorted);
    };

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div><button onClick={() => handleSort("lowToHigh")}>Low to High</button>
            <button onClick={() => handleSort("highToLow")}>High to Low</button>
            <button onClick={() => handleSort("")}>Reset</button>
            {productData.map((item) => {
                return (
                    <div>
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <p>$ {item.price}</p>
                        <p>Quantity : {item.quantity}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Ecom