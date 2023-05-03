import React, { useContext, useState } from 'react'
import { pizzaContext } from './PizzaContext';
import Navbar from './Navbar';

const PizzaCart = () => {
    const { cartData } = useContext(pizzaContext)
    const [discount, setdiscount] = useState(0)
    const { deliveryTime, price } = cartData.reduce((acc, arr) => {
            acc.deliveryTime = acc.deliveryTime + arr.delivery_time
            acc.price = acc.price + arr.price
        return acc
    }, { deliveryTime: 0, price: 0 })


    const handleDiscount = () =>{
        setdiscount(5)
    }
    return (
        <div>
            <Navbar />
            <h1>My Cart</h1>
            {deliveryTime !== 0 && price !== 0 ? (<div><h3>Cart overview</h3>
                <p><strong>Total delivery time : {deliveryTime} Minutes</strong></p> <p><strong>Total price : Rs. {discount === 0 ? price : `${price - discount} (-Rs 5)`}</strong></p><button onClick={handleDiscount}>Apply coupon</button></div>) : <h1>Cart is empty !</h1>}

            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {cartData.map((item) => {
                    return (
                        <div
                            key={item.id}
                            style={{
                                border: "2px solid black",
                                width: "200px",
                                padding: "30px",
                                flex: "1",
                            }}
                        >
                            <img src={item.image} alt="" srcset="" width={"220px"} />
                            <p>Name : {item.name}</p>
                            <p>Description : {item.description}</p>
                            <p>Price : {item.price}</p>
                            <p>Delivery Time : {item.delivery_time}</p>
                            {/* <button onClick={() => handleToCart(item.id)}>Add to cart</button> */}

                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default PizzaCart