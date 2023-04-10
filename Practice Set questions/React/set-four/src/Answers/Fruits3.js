import React, { useState } from 'react'

const Fruits3 = () => {
    const itemList = [
        { id: 1, name: "Apple", category: "Fruit" },
        { id: 2, name: "Carrot", category: "Vegetable" },
        { id: 3, name: "Banana", category: "Fruit" },
        { id: 4, name: "Broccoli", category: "Vegetable" },
    ];

    const [selectedCategory, setSelectedCategory] = useState(null);
    
    const filteredItems =
        selectedCategory === null
            ? itemList
            : itemList.filter((item) => item.category === selectedCategory);
            
    return (
        <div>
            <button onClick={() => setSelectedCategory(null)}>All</button>
            <button onClick={() => setSelectedCategory("Fruit")}>Fruit</button>
            <button onClick={() => setSelectedCategory("Vegetable")}>Vegetable</button>
            <ul>
                {filteredItems.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.category}
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default Fruits3