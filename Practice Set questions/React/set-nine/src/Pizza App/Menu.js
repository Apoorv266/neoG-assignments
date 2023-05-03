import React, { useContext } from 'react'
import { pizzaContext } from './PizzaContext'
import Navbar from '../Pizza App/Navbar'
import { Link } from 'react-router-dom'
import Filters from './Filters'

const Menu = () => {
    const { handleToCart, sortedData } = useContext(pizzaContext)
    return (
        <div>
            <Navbar/>
            <Filters/>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {sortedData.map((item) => {
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

                            {item.toCart ? <Link to={"/cart"}><button>Go to Cart</button></Link> : 
                            <button onClick={() => handleToCart(item)}>Add to cart</button>}

                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Menu