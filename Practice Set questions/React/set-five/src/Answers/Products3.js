import React, { useEffect, useState } from 'react'

const Products3 = () => {
    const fakeFetch = (url) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (url === 'https://example.com/api/products') {
                    resolve({
                        status: 200,
                        message: 'Success',
                        data: {
                            products: [
                                { name: 'Color Pencils', price: 50, quantity: 40 },
                                { name: 'Sketchpens', price: 110, quantity: 20 },
                                { name: 'Erasor', price: 20, quantity: 20 },
                                { name: 'Sharpner', price: 22, quantity: 30 },
                            ],
                        },
                    })
                } else {
                    reject({
                        status: 404,
                        message: 'Items list not found.',
                    })
                }
            }, 2000)
        })
    }

const [data, setdata] = useState([])
    const fetchFunc = async () => {
const response = await fakeFetch("https://example.com/api/products")
if (response.status === 200) {
    setdata(response.data.products)
}
    }

    useEffect(() => {
        fetchFunc()
    }, [])

  return (
    <div>
    <button onClick={()=>setdata(data.filter(item => item.price < 100))}>Filter by price</button>
    <ul>
        {data.map((item) =><li>{item.name}-Rs.{item.price}-{item.quantity}</li>)}
    </ul>
</div>
  )
}

export default Products3