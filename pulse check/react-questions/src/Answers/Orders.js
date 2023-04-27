import React, { useState } from 'react'
const Orders = () => {
    const ordersList = [
        { id: 1, productName: "iPad", shipped: true },
        { id: 2, productName: "Air Pods", shipped: true },
        { id: 3, productName: "MacBook", shipped: false },
        { id: 4, productName: "iPhone", shipped: false },
    ];

    const [filterState, setfilterState] = useState(null)
    let filteredData = filterState === null ? ordersList : ordersList.filter((item) => item.shipped === filterState)

    const handleAll = () => {
        // setData(ordersList)
        setfilterState(null)
    }

    const handleshipped = () => {
        // setData(ordersList.filter((item) => item.shipped))
        setfilterState(true)
    }

    const handlenotshipped = () => {
        // setData(ordersList.filter((item) => !item.shipped))
        setfilterState(false)
    }

    return (
        <div>
            {filteredData.map((item) => {
                return (
                    <div key={item.id}>
                        <h1>{item.productName}</h1>
                    </div>
                )
            })}
            <button onClick={handleAll}>All</button>
            <button onClick={handleshipped}>Shipped</button>
            <button onClick={handlenotshipped}>Not shipped</button>
        </div>
    )
}

export default Orders