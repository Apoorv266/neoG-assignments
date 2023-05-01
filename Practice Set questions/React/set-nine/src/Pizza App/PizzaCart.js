import React, { useContext } from 'react'
import { pizzaContext } from './PizzaContext';
import Navbar from './Navbar';

const PizzaCart = () => {
    const { data } = useContext(pizzaContext)
  return (
    <div>
        <Navbar/>
        <h1>My Cart</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
                {data.filter(item => item.toCart).map((item) => {
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