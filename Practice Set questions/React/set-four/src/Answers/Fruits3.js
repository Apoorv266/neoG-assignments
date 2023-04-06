import React, { useState } from 'react'

const Fruits3 = () => {
    const itemList = [
        { id: 1, name: "Apple", category: "Fruit" },
        { id: 2, name: "Carrot", category: "Vegetable" },
        { id: 3, name: "Banana", category: "Fruit" },
        { id: 4, name: "Broccoli", category: "Vegetable" },
    ];

    const [data, setdata] = useState(itemList)

    const handleClick = (e) => {
        if (e.target.value === "All") {
            setdata(itemList)
        }else if(e.target.value === "Fruits"){
            setdata(itemList.filter(item => item.category === "Fruit"))
        }else if(e.target.value === "Vegetables"){
            setdata(itemList.filter(item => item.category === "Vegetable"))
        }
    }
    return (
        <div>
            <button onClick={handleClick} value={"All"}>All</button>
            <button onClick={handleClick} value={"Fruits"}>Fruits</button>
            <button onClick={handleClick} value={"Vegetables"}>Vegetables</button>
            <ol>
                {data.map((item) => {
                    return <li style={{ color: item.category === "Fruit" ? "orange" : "green", fontWeight: "900" }} key={item.id}>{item.name}</li>
                })}
            </ol></div>

    )
}

export default Fruits3